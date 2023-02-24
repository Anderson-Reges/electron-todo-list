# Electron - ToDoList

# 👨‍💻 O que foi desenvolvido
Este projeto trata-se de um ToDo List utilizando Electron com front-end e back-end integrado, com intuito de aprendizado do Electron e por em pratica os aprendizados de front e back end.

## Técnologias usadas

Front-end:
> Desenvolvido usando: React, ContextAPI, Sass, Axios, DotEnv

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, MySQL, Sequelize, Cors 


## Instalando Dependências

> Backend
  - utilize o comando `cd back-end` e então rode o serviço `node` com o comando `docker-compose up -d`.
    - Esse serviço irá inicializar um container chamado `electron-todolist`.

  - Use o comando `docker exec -it electron-todolist bash`.
    - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  - Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ : para executar essa parte, o arquivo `.env` com as variaveis de ambiente da config e do server deve existir, caso contrario retornara um erro.
  - as variaveis de ambiente são:
    ```.env
      MYSQL_HOST=
      MYSQL_PORT=
      MYSQL_DB_NAME=
      MYSQL_USER=
      MYSQL_PASSWORD=
      API_PORT=
    ```
  
> DB
- utilize o comando `cd back-end` e então rode o comando `npm run prestart`
  - esse comando criar o banco no container `electron-todolist-db`, migra as tabelas e colunas e as preenchem

> Frontend
- utilize o comando `cd front-end` e então Instale as dependências com `npm install`.

## Executando aplicação

* Para rodar o back-end:

  > utilize o comando `cd back-end` e então use o comando `docker exec -it electron-todolist bash`.
    - dentro do terminal rode o comando `npm run start` para rodar o servidor Node 
  
⚠ Atenção ⚠ : No arquivo `front-end/src/electron/main.js` tem um variavel de ambiente, que é a porta que o servidor React usa para executar, como padrao esta a `3000` e em `front-end/src/utils/fetch.js` tem uma variavel ambiente do servidor Node. caso queira mudar as os valores crie um arquivos `.env` com as seguintes variaveis.
  - as variaveis de ambiente são:
    ```.env
      REACT_APP_API_PORT=
      REACT_PORT=
    ```
  
* Para rodar o front-end:

  > utilize o comando `cd front-end` e então use o comando `npm start` para rodar o servidor do React.
 
 * Para rodar o Electron:
 
  > utilize o comando `cd front-end` e então use o comando `npm run electronStart` para rodar o app com Electron
   - para criar uma build do app para desktop utilize o comando `npm run make` dentro da pasta `front-end`. (testado no windows e no Linux).
