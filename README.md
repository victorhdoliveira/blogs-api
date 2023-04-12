## Projeto Blogs API
Para o projeto foi criada uma API e um banco de dados para produzir conteúdo para um blog. Para isso, uma aplicação em Node.js foi utilizada com o pacote sequelize para realizar operações de criação, leitura, atualização e deleção (CRUD) de posts. No total, foram desenvolvidos 14 endpoints que seguem os princípios do REST e que estão conectados ao banco de dados.

API

| Método HTTP | Endpoint        | Descrição               | 
| :---------- | :---------      | :---------------------- |
| POST        | `/login`        | Realiza o login com usuários do banco de dados e gera um token       
| POST        | `/user`         | Cria um novo usuário e gera um token
| GET         | `/user`         | :lock: Retorna a lista de todos os usuários
| GET         | `/user/:id`     | :lock: Retorna o usuário conforme o id
| DELETE      | `/user/me`      | :lock: Deleta o usuário logado 
| GET         | `/categories`   | :lock: Retorna todas as categorias
| POST        | `/categories`   | :lock: Cria uma nova categoria
| GET         | `/post`         | :lock: Retorna todos os posts
| GET         | `/post/:id`     | :lock: Retorna os posts relacionados ao id
| DELETE      | `/post/:id`     | :lock: Deleta o post de acordo com o id
| POST        | `/post`         | :lock: Cria um novo post
| PUT         | `/post/:id`     | :lock: Edita o post conforme o id
| GET         | `/post/:search` | :lock: Pesquisa os posts de acordo com nome ou conteúdo

:lock: As rotas com cadeados somente pode ser acessadas com token válido gerado no login através do headers com o título "Authorization" :key:.

## Tecnologias
* Node.js
* Sequelize
* JSON Web Token(JWT)
* MySQL
* Docker

## Instalando Dependências
Clone o repositório do GitHub

```javascript
 git clone git@github.com:victorhdoliveira/blogs-api.git
```

### Com Docker
> Backend

1. Rode os serviços node e db com o seguinte comando: 
```bash
docker-compose up -d
``` 

2. Abra o terminal interativo do container: 
```bash
docker exec -it blogs_api bash
``` 

3. Instale as dependências dentro do container: 
```bash
npm install
``` 
4. Execute a aplicação: 
```bash
npm run debug
``` 
> Testes

4. Dentro do terminal do container:
```bash
npm test
``` 

:warning: Atenção: O git dentro do container não vem configurado com suas credenciais;

### Sem Docker

Instale as dependências
```bash
npm install
``` 
Execute a aplicação
```bash
npm run debug
``` 
