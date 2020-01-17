Pokud nemáš Symfony CLI, tak 
```shell script
curl -sS https://get.symfony.com/cli/installer | bash
```

Composer asi máš, takže dál:
```shell script
composer install
yarn install
yarn run encore dev --watch
symfony server:start
```
voilá

http://localhost:8000