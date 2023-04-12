## Projeto Blogs API
Nesse projeto, foi criada uma API e um banco de dados para produzir conteúdo para um blog. Para isso, uma aplicação em Node.js foi utilizada com o pacote sequelize para realizar operações de criação, leitura, atualização e deleção (CRUD) de posts. No total, foram desenvolvidos 14 endpoints que seguem os princípios do REST e que estão conectados ao banco de dados.

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
