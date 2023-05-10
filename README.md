
# Rocket Movies (Back-end)

Projeto criado para o desafio: Aplicação em Node da Rocketseat.
Nesse Projeto devemos criar uma aplicação onde será cadastrado um ou mais usuários, e posteriormente podemos cadastrar filmes. 

Cadastrando um filme, para cadastrar o mesmo é necessário preencher o nome do filme, a descrição e uma nota para o filme, além de poder colocar tags nela, para facilitar e saber se tal filme é de um certo tipo de gênero.




## Estrutura do projeto


![App Screenshot](https://i.ibb.co/n7MdJ6j/Screenshot-1.png)


## Funcionalidades  (junto do Front-end)

- Registro de usuário.
- Login de usuário.
- Cadastro do filme (contendo: título, descrição, nota do filme [0 a 5], tags de gênero do filme).
- Pode ser cadastrado vários filmes.
- Podem remover os filmes já cadastrados.
- Trocar informações da conta (nome do usuário, e-mail, senha e foto de perfil).


## Rodando localmente

Clone o projeto

```bash
  https://github.com/JupterKDH/MovieAPI.git
```

Entre no diretório do projeto

```bash
  cd MovieAPI
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Recriar database

Caso queira zerar a database, é só excluir o arquivo database.db (localizado em: src/database) e usar novamente

`npm run dev`

e logo depois fechar uma vez, então utilizar:

`npm run migrate` então novamente `npm run dev` e pronto vai estar feito novamente.




## Stack utilizada

**Front-end:** React, Styled-Components (o resto não lembro  ¯\_(ツ)_/¯ )

**Back-end:** Node, Express e Knex


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/JupterKDH?tab=repositories)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/konraddh/)


