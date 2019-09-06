# laravel-docker-compose-environment

![環境イメージ](https://repository-images.githubusercontent.com/206670413/30d9ed80-d08f-11e9-9aad-521bac8d74c3)

## Overview

Laravel PHP 開発環境を docker-compose で簡単に実行できるようにまとめたものです。

docker が動く環境であれば OS を問わない開発環境の構築が可能です。

This is a summary of the Laravel PHP development environment that can be easily executed with docker-compose.

It is possible to build a development environment regardless of OS if docker is running.

## Description

Laravel を用いたウェブアプリケーションを開発するために必要なミドルウェア等がまとまった docker-compose です。

Docker-compose is a collection of middleware necessary for developing web applications using Laravel.

- php:7.3
- apache: 2.4
- mariaDB: 10.4.4
- gulp (sass のコンパイル)
- adminer (GUI DB 管理ツール)
- smtp (メールキャッチャー)

Laravel のソースコードを別途用意し、パスを指定するだけで上記開発環境の構築が完了します。

Laravel source code is prepared separately, and the development environment can be built simply by specifying the path.

## Requirement

docker > 1.13

docker-compose > 3.0

### 1

<a href="https://www.docker.com/docker-mac">Docker fot Mac</a> or <a href="https://www.docker.com/docker-windows">Docker for Windows</a>をダウンロード、インストール。

### 2

当リポジトリを clone → `docker-compose.yml` を編集。 `** source_dir **` の部分を Laravel のソースコードパスに書き換える（相対パス推奨）。

→ これでローカルのプロジェクトフォルダが Docker コンテナにマウントされる。

### 3

docker-compose.yml の mariadb ディレクティブの環境変数を設定する

### 4

docker-compose.yml の gulp ディレクティブの`** source_dir **` の部分を Laravel のソースコードパスに書き換える（相対パス推奨）。

### 5

初回のみ `docker-compose run --rm gulp npm install` を実行(時間かかります)

### 6

`docker-compose up -d` を実行

### 7

http://localhost

## コンテナ間通信設定

docker-compose はサービス名による名前解決が可能。以下例にしたがって Laravel の接続設定を行なってください。

docker-compose can be resolved by service name. Set up Laravel connection according to the following example.

`.env` (Laravel source directory)

```
DB_CONNECTION=mysql
DB_HOST=mariadb
DB_PORT=3306
DB_DATABASE=設定したDB名
DB_USERNAME=root
DB_PASSWORD=password
```

## おすすめエイリアス

docker コマンドはめんどくさいので、alias をご紹介。

### ~/.zshrc

```
//dockerコマンド
alias dk='docker'

//稼働中コンテナを表示
alias dkp='docker ps'

//コンテナ一覧を表示
alias dkpa='docker ps -a'

//dockerコンテナを起動
alias dkcm='docker-compose up -d'

//dockerコンテナを起動
alias dkcmd='docker-compose down'
```

## Licence

MIT

## Author

[uchidayuma](https://github.com/uchidayuma)
