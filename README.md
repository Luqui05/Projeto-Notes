# Projeto Notes

Este é um projeto simples de gerenciamento de notas, desenvolvido com Node.js, Express e MongoDB. Ele permite criar, visualizar, editar e excluir notas.

## Funcionalidades

- Adicionar uma nova nota
- Visualizar todas as notas
- Editar uma nota existente
- Excluir uma nota

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Handlebars (como template engine)
- Bootstrap (para estilização)

## Pré-requisitos

- Node.js instalado
- MongoDB instalado e em execução

## Instalação

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd Projeto-Notes
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Configuração do Banco de Dados

Certifique-se de que o MongoDB está em execução na sua máquina local na porta padrão (27017). Caso contrário, ajuste a URL de conexão no arquivo `db/connection.js`:

```js
const url = "mongodb://127.0.0.1:27017/notesDb";
```

## Executando o Projeto

Para iniciar o servidor, execute o comando:

```sh
npm start
```

O projeto estará disponível em [http://localhost:8000](http://localhost:8000).

## Estrutura do Projeto

```
Projeto-Notes/
│── index.js                 # Arquivo principal do servidor Express
│── db/
│   └── connection.js        # Configuração e conexão com o banco de dados MongoDB
│── routes/
│   └── notes.js             # Rotas para gerenciamento de notas
│── views/
│   ├── layouts/
│   │   └── main.handlebars  # Layout principal
│   ├── home.handlebars      # Página inicial que lista todas as notas
│   ├── notes/
│   │   ├── create.handlebars
│   │   ├── edit.handlebars
│   │   └── detail.handlebars
│── public/
│   └── css/
│       └── styles.css       # Arquivo de estilos CSS
```

## Rotas

### **Notas**

- `GET /` → Página inicial que lista todas as notas.
- `GET /notes` → Página para adicionar uma nova nota.
- `POST /notes` → Rota para criar uma nova nota.
- `GET /notes/detail/:id` → Página de detalhes de uma nota específica.
- `GET /notes/edit/:id` → Página para editar uma nota específica.
- `POST /notes/update` → Rota para atualizar uma nota existente.
- `POST /notes/delete` → Rota para excluir uma nota.

## Autor

Lucas Ribeiro
