# Bla Bla Bhlog

Um blog para publicar seus posts e fotos!

## Como rodar a aplicação

### Requisitos
- Java 8 / Maven
- Angular 13
- NodeJs
- PostgreSQL

### PostgreSQL
É necessário que exista um banco de dados vazio com a seguinte configuração
- Nome: bhlog-db
- Usuário: master
- Senha: master

Caso queira alterar esta configuração, basta mudar os parâmetros em `application.properties`
### Backend
Para iniciar a API navegue até o diretório `bhlog-back` e então rode o comando abaixo

> mvn spring-boot:run

### Frontend
Para iniciar o frontend navegue até o diretório `bhlog-front` e então rode os comandos abaixo

> npm i
>
> ng serve

Então poderá acessar o blog em http://localhost:4200