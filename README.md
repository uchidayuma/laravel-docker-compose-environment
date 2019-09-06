# laravel-docker-compose-environment

![環境イメージ](https://repository-images.githubusercontent.com/206670413/30d9ed80-d08f-11e9-9aad-521bac8d74c3)

## Install

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

//コンテナ削除
alias dkrm='docker rm'

//dockerコンテナを起動
alias dkcm='docker-compose up -d'

//dockerコンテナを起動
alias dkcmd='docker-compose down'
```
