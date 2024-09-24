
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



Claro! Aqui está um modelo de README.md que você pode usar para o seu projeto. Sinta-se à vontade para personalizar conforme necessário.

```markdown
# MiraIraMaterial

Este é o projeto **MiraIraMaterial**, um aplicativo web que visa promover e celebrar a cultura popular do Grupo MiraIra. O projeto foi desenvolvido utilizando tecnologias como Node.js, Express e EJS.

## 📦 Funcionalidades

- **Homepage**: Uma página de boas-vindas que introduz o grupo.
- **Materiais**: Uma seção onde você pode visualizar e buscar materiais.
- **Figurinos**: Apresentação dos figurinos usados nas apresentações.
- **Sobre**: Informações sobre o grupo e a autoria do site.

## 🔧 Pré-requisitos

Antes de executar o projeto, você precisa ter o seguinte instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node.js)

## 🚀 Como executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/surerocha/MiraIraMaterial.git
   ```

2. **Navegue até o diretório do projeto**

   ```bash
   cd MiraIraMaterial
   ```

3. **Instale as dependências**

   ```bash
   npm install
   ```

4. **Inicie o servidor**

   ```bash
   npm start
   ```

   O aplicativo estará disponível em `http://localhost:3000` (ou outra porta se você configurou de maneira diferente).

## 🔍 Testando

- Abra seu navegador e acesse `http://localhost:3000` para visualizar a homepage.
- Explore as seções "Materiais", "Figurinos" e "Sobre" para conhecer mais sobre o Grupo MiraIra.

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, EJS
- **Banco de Dados**: MongoDB (se aplicável)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um *issue* ou enviar um *pull request*.

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

- **Sure Rocha Bezerra** - [GitHub](https://github.com/surerocha)

---

Sinta-se à vontade para adicionar qualquer outra informação relevante que você achar necessário!
```

### Como Usar

1. **Crie um arquivo chamado `README.md` na raiz do seu projeto**.
2. **Cole o conteúdo acima no arquivo**.
3. **Personalize conforme necessário** (como detalhes específicos do seu projeto ou outras informações importantes).

Se precisar de mais alguma coisa, é só avisar!
