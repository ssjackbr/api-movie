# API-MOVIE
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/ssjackbr/api-movie/blob/master/LICENSE) 

# Sobre o projeto
 
A api-movie é uma aplicação full stack web que consiste em uma pesquisa de preferência de filmes e séries onde as votações são computadas e atualizadas instantaneamente.

## Etapas do projeto
- Criação de projetos backend e frontend
- Projetos salvos em monorepo
- Visual estático do front end

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Lógica:
- Informar email, id do filme e valor da avaliação (1 a 5).
- Recuperar usuário do banco de dados pelo email. Se o usuário não existir, insira no banco.
- Salvar a avaliação do usuário para o dado filme.
- Recalcular a avaliação média do filme e salvar no banco de dados.

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/ssjackbr/api-movie

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/ssjackbr/api-movie

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Jackson R

https://www.linkedin.com/in/jackson-rodrigues/
