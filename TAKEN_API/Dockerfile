# Utilisation de l'image officielle contenant php 8.4 et apache
FROM php:8.4-apache

# Change le nom du serveur en localhost
RUN echo "ServerName localhost" | tee -a /etc/apache2/apache2.conf

#Modification de la timezone
ENV TZ=Europe/Paris

# Instalation de diverses librairies et extensions php
RUN apt-get update && \
    apt-get install -y \
		acl \
		nano \
		vim \
		tzdata \
        libpq-dev \
        libsqlite3-dev \
        libaio-dev \
		libsodium-dev \
        unzip \
		git \
        wget && \
    docker-php-ext-install pdo pdo_mysql pdo_pgsql pdo_sqlite sodium

# Installation de composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Utilisation du php.ini-development
RUN cp $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/conf.d/php.ini

# Modification de la timezone PHP
RUN echo "date.timezone = Europe/Paris" > $PHP_INI_DIR/conf.d/timezone.ini

# Installation de nvm et npm
ENV NVM_DIR $HOME/.nvm
RUN mkdir -p $NVM_DIR && curl https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash && . ~/.bashrc && nvm install --lts
RUN . $NVM_DIR/nvm.sh && ln -s $NVM_DIR/$(nvm current) $NVM_DIR/cur && ln -s $NVM_DIR/versions/node/$(nvm current) $NVM_DIR/versions/node/cur
ENV NODE_PATH $NVM_DIR/cur/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/cur/bin:$PATH

# Mise en place SSL (pour utiliser https) avec un certificat généré par mkcert
RUN mkdir /etc/ssl/certs/server
RUN mkdir /etc/ssl/private/server
RUN chown www-data /etc/ssl/certs/server/
RUN chown www-data /etc/ssl/private/server/
RUN openssl req -x509 -nodes -newkey rsa:2048 -keyout /etc/ssl/private/server/key.pem -out /etc/ssl/certs/server/cert.pem -days 3650 -subj "/CN=localhost"
RUN chown www-data /etc/ssl/certs/server/cert.pem
RUN chown www-data /etc/ssl/private/server/key.pem
COPY docker-config/apache/site.conf /etc/apache2/sites-available/000-default.conf

# Changement de dossier de travail (dossier partagé)
WORKDIR /var/www/html
RUN chown www-data /var/www/html/

# Creation d'un espace de travail pour les autres projets (dossier partagé)
RUN mkdir /root/workspace

# Configuration du serveur web
RUN a2enmod rewrite
RUN a2enmod ssl
RUN service apache2 start