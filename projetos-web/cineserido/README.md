# 🎬 Sistema CineSeridó

Sistema web para gerenciamento de sessões de cinema, reservas de assentos e acompanhamento de indicadores de bilheteria.

## 📋 Sobre

O **CineSeridó** é uma aplicação web desenvolvida para simular o funcionamento de um sistema de cinema.

O sistema permite cadastrar filmes e sessões, controlar a disponibilidade de assentos, realizar reservas e cancelamentos, consultar sessões por diferentes critérios e acompanhar métricas de ocupação e faturamento.

O projeto foi desenvolvido com **HTML, CSS e JavaScript puro**, utilizando o **Local Storage** do navegador para persistência dos dados.

> **Status:** projeto funcional desenvolvido para fins de estudo e prática de desenvolvimento web.

## 🚀 Tecnologias Utilizadas

* **HTML5** — estrutura das páginas e formulários
* **CSS3** — estilização e responsividade da interface
* **JavaScript (ES6+)** — lógica da aplicação, manipulação do DOM e gerenciamento dos dados
* **Local Storage** — persistência dos dados no navegador
* **JavaScript Modules** — organização do código utilizando `import` e `export`
* **Git/GitHub** — versionamento e hospedagem do código

## ✨ Funcionalidades

### 1. 🎞️ Gerenciamento de Filmes

* Cadastro de filmes
* Definição de duração
* Seleção de múltiplos gêneros
* Definição da classificação indicativa
* Cadastro de imagem do filme
* Remoção de filmes do catálogo
* Exibição dos filmes disponíveis no catálogo

### 2. 🎟️ Gerenciamento de Sessões

* Cadastro de sessões
* Associação da sessão a um filme
* Definição de sala, data e horário
* Definição da capacidade da sala
* Definição do preço do ingresso
* Validação de sessões agendadas no passado
* Validação de conflitos de horário na mesma sala
* Controle dos ingressos vendidos por sessão

### 3. 💺 Reservas de Assentos

* Seleção visual de assentos
* Identificação de assentos disponíveis e ocupados
* Validação do nome do cliente
* Cálculo automático do valor da reserva
* Geração de ingressos para os assentos selecionados
* Persistência das reservas
* Atualização da disponibilidade dos assentos após a reserva

### 4. ❌ Cancelamento de Reservas

* Consulta das reservas realizadas
* Identificação do cliente e da sessão
* Cancelamento de reservas
* Liberação dos assentos associados à reserva
* Atualização dos dados armazenados

### 5. 🔎 Consulta e Filtros de Sessões

A página de sessões permite filtrar os resultados por:

* Filme
* Data
* Sala
* Disponibilidade de assentos

Também são exibidas informações como horário, sala e quantidade de vagas disponíveis.

### 6. 📊 Relatórios e Métricas

O sistema possui um painel de indicadores com:

* Total de sessões cadastradas
* Total de ingressos vendidos
* Total de lugares disponíveis
* Taxa de ocupação
* Sessão com maior ocupação
* Filme mais vendido
* Faturamento total

## 💾 Persistência de Dados

Como o projeto ainda não possui um backend ou banco de dados, os dados são armazenados utilizando o **Local Storage** do navegador.

O acesso ao armazenamento é centralizado no módulo `storage.js`, responsável pelas operações de:

* Salvar dados
* Recuperar dados
* Reescrever dados
* Remover dados

Os principais conjuntos de dados utilizados pela aplicação são:

* `filmes`
* `secoes`
* `estados`

> **Limitação atual:** os dados ficam armazenados apenas no navegador e no dispositivo utilizado. Eles não são compartilhados entre usuários ou dispositivos.

## 📂 Estrutura do Projeto

```text
cineserido/
│
├── index.html
│
├── pages/
│   ├── sessoes.html
│   ├── reserva.html
│   ├── gerenciamento.html
│   └── relatorio.html
│
├── css/
│   └── estilo.css
│
├── js/
│   ├── gerenciamento.js
│   ├── index.js
│   ├── relatorio.js
│   ├── reserva.js
│   ├── secoes.js
│   └── storage.js
│
├── imgs/
│
└── README.md
```

## 🧠 Organização do JavaScript

O JavaScript foi dividido em módulos de acordo com as responsabilidades principais da aplicação:

| Arquivo            | Responsabilidade                                        |
| ------------------ | ------------------------------------------------------- |
| `index.js`         | Exibição do catálogo de filmes na página inicial        |
| `gerenciamento.js` | Cadastro de filmes, sessões e gerenciamento de reservas |
| `secoes.js`        | Consulta, filtragem e seleção de sessões                |
| `reserva.js`       | Seleção de assentos e realização de reservas            |
| `relatorio.js`     | Cálculo e exibição das métricas do sistema              |
| `storage.js`       | Abstração das operações com `localStorage`              |

Essa divisão representa a organização atual do projeto e poderá ser aprimorada em uma futura refatoração.

## 📝 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

* Manipulação do DOM
* Eventos e formulários
* Funções e modularização
* Arrays e objetos
* Métodos de arrays
* `Set`
* Expressões regulares
* Manipulação de datas
* `localStorage`
* `JSON`
* JavaScript Modules
* Geração dinâmica de elementos HTML
* Validação de dados
* Regras de negócio
* Organização de código em diferentes módulos

## 🔮 Melhorias Futuras

O projeto funciona atualmente como uma aplicação frontend independente, mas existem diversas possibilidades de evolução.

### Arquitetura e código

[] Refatorar o JavaScript seguindo princípios de **Clean Code**
[] Separar melhor as responsabilidades da aplicação
[] Reduzir o acoplamento entre regras de negócio, persistência e interface
[] Melhorar a organização dos módulos
[] Padronizar nomenclaturas
[] Criar uma arquitetura mais escalável e manutenível

### Persistência

[] Substituir o `localStorage` por um banco de dados
[] Desenvolver um backend para a aplicação
[] Criar uma API para comunicação entre frontend e backend
[] Implementar persistência centralizada dos dados

### Funcionalidades

[] Edição de filmes e sessões
[] Autenticação de usuários
[] Diferenciação entre clientes e administradores
[] Histórico de reservas
[] Diferentes categorias de ingressos
[] Formas de pagamento
[] Geração de comprovantes
[] Melhorias no sistema de relatórios
[] Dashboard com gráficos

### Qualidade

[] Implementação de testes automatizados
[] Tratamento mais robusto de erros
[] Validações mais completas
[] Melhorias de acessibilidade
[] Melhorias de responsividade e experiência do usuário

## 🖥️ Como Executar

Como o projeto utiliza JavaScript Modules, recomenda-se executá-lo através de um servidor HTTP local.

Uma opção simples é utilizar a extensão **Live Server** no Visual Studio Code.

Após iniciar o servidor, abra o arquivo:

```text
index.html
```

no navegador.

## 👨‍💻 Autor

Desenvolvido por **Fabiano O.**

GitHub: [Fabiano-Olivr](https://github.com/Fabiano-Olivr)

## 📄 Licença

Este projeto foi desenvolvido para **fins de estudo e prática de desenvolvimento web**.