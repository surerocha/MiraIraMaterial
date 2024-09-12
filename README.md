
# MiraIraMaterial

O projeto **MiraIraMaterial** é um sistema para gerenciar figurinos e materiais utilizados em danças. Desenvolvido utilizando Node.js e Express para o backend, e MongoDB para o banco de dados, este projeto oferece funcionalidades completas de CRUD (Create, Read, Update, Delete) para figurinos e materiais.

## Funcionalidades

- **Gestão de Figurinos**
  - Adicionar novos figurinos
  - Listar figurinos existentes
  - Editar detalhes de figurinos
  - Deletar figurinos

- **Gestão de Materiais**
  - Adicionar novos materiais
  - Listar materiais existentes
  - Editar detalhes de materiais
  - Deletar materiais

## Tecnologias Utilizadas

- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB
- **Templating Engine**: EJS
- **Estilo**: Bootstrap

## Instalação

Para rodar este projeto localmente, siga os seguintes passos:

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/surerocha/MiraIraMaterial.git
   ```

2. **Navegue até o Diretório do Projeto**

   ```bash
   cd MiraIraMaterial
   ```

3. **Instale as Dependências**

   Certifique-se de que você tem o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados. Instale as dependências do projeto com:

   ```bash
   npm install
   ```

4. **Configure as Variáveis de Ambiente**

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo, substituindo os valores pelos seus próprios:

   ```env
   MONGODB_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/databasepw
   PORT=3000
   ```

5. **Inicie o Servidor**

   ```bash
   npm start
   ```

   O servidor estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- **`models/`**: Contém os modelos do MongoDB (Figurino e Material).
- **`views/`**: Contém os arquivos EJS para renderização das páginas.
- **`public/`**: Contém arquivos estáticos como CSS e JavaScript.
- **`server.js`**: Arquivo principal para configuração do servidor Express.

## Contribuições

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para sua nova funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
4. Dê push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Contato

Para dúvidas ou mais informações, entre em contato com [Sure](surerochab@gmail.com).

---

Feito com ❤️ por [Sure Rocha](https://github.com/surerocha).
```

### Notas:
- **Substitua `<usuario>` e `<senha>`** pelo seu nome de usuário e senha do MongoDB.
- **Substitua `seuemail@example.com`** e `Seu Nome` com suas informações de contato.
- **Adapte a descrição e os detalhes** conforme o projeto evolui.
