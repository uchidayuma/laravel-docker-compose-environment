FROM --platform=linux/x86_64 php:8.1.8-apache

RUN apt-get update
RUN apt-get install -y zlib1g-dev \
  && apt-get install -y zip unzip \
  && apt-get -y install libzip-dev \
  && apt-get install -y libonig-dev \
  && docker-php-ext-install pdo_mysql mysqli mbstring zip \
  && a2enmod rewrite

# install GD & exif
RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev
# PHP拡張用モジュールの設定 GDのfreetypeとjpegを有効
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
# PHP拡張モジュールのGD（画像変換モジュール）をインストール
RUN docker-php-ext-install -j$(nproc) gd 
#RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
#RUN docker-php-ext-install -j$(nproc) gd exif

# タイムゾーン設定
ENV TZ=Asia/Tokyo

# cronのインストール
RUN apt-get update && apt-get install -y \
  busybox-static \
  && apt-get clean

RUN curl -sS https://getcomposer.org/installer | php \
  && mv composer.phar /usr/local/bin/composer \
  && chmod +x /usr/local/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

COPY cmd.sh /cmd.sh
RUN chmod 777 /cmd.sh
CMD ["/cmd.sh"]
#CMD busybox crond -l 2 -L /dev/stderr -f
#ENTRYPOINT [ "apachectl" ]
#CMD [ "-D", "FOREGROUND" ]
