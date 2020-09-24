# GCB Investimentos Back-end Test

## Instalação

Para o servidor de desenvolvimento, primeiro copiamos o arquivo `.env` e
preenchemos nossas variaveis de ambiente:

```bash
$ cp .env.example .env
```

Depois instalamos as dependencias do projeto:

```bash
$ npm install
```

Criamos e migramos a base de dados:

```bash
$ npx sequelize db:create db:migrate
```

Alimentamos o banco de dados com dados básicos:

```bash
$ npx sequelize db:seed:all
```

Finalmente rodamos o script definido em `package.json`:

```bash
$ npm start
```

## Tecnologias utilizadas

### Ambiente de produção

- [express](https://expressjs.com/pt-br/): framework minimalista que orquestra
  toda a aplicação. Nele podemos definir rotas, controllers, models, views,
  middlewares, serviços e validações.

- [ejs](https://ejs.co/#docs): linguagem de templating que nos permite manipular
  e executar código javascript na geração das views, possibilitando um conteudo
  dinamico.

- [dotenv](https://github.com/motdotla/dotenv#usage): modulo que nos permite
  carregar variaveis de ambiente detro de arquivos `.env`, e acessa-las dentro
  da nossa aplicação pela propiedade do NodeJS
  [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env).

- [sequelizeV5](https://github.com/sequelize/sequelize/): Nos premite interagir
  com a base de dados sem ter que escrever SQL.

### Ambiente de desenvolvimento

- [nodemon](https://github.com/remy/nodemon#usage): monitora e recarrega
  automaticamente as mudanças nos arquivos enquanto codamos.

- [prettier](https://prettier.io/playground/): formata nosso codigo para ficar
  organizado e legível.

- [sucrase](https://github.com/alangpierce/sucrase#sucrase): o compilador de
  javascript mais veloz do mercado.

- [sequelize-cli](https://github.com/sequelize/cli): Nos permite interagir com o
  Sequelize para fazer migrações, seed, etc.
