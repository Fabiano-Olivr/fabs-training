# Sistema de CineSeridó

Site para administrar sessões de cinema e reserva de assentos.

## 📋 Sobre

O **CineSeridó** é uma aplicação voltada para a gestão de sessões e bilheteria. O projeto simula o funcionamento real de um cinema, gerenciando conflitos de horários em salas, controle dinâmico de assentos, cálculo de faturamento e geração de relatórios de ocupação.

## 🚀 Tecnologias Utilizadas

* 

## ✨ Funcionalidades

As funcionalidades do sistema estão divididas entre a gestão da bilheteria, o fluxo de vendas, a busca de dados e a geração de métricas:

**1. Gestão e Cadastro de Sessões**
* **Cadastro de sessões:** Registro de novos horários com filme, sala, data, horário e capacidade total.
* **Validação de conflitos de sala:** Impede o agendamento de dois filmes na mesma sala e no mesmo horário.

**2. Vendas e Cancelamentos (Bilheteria)**
* **Reserva de ingressos:** Solicitação de assentos informando a sessão, nome do cliente e quantidade de ingressos.
* **Cálculo de valores:** Processamento do valor total da compra no ato da reserva.
* **Validação de capacidade:** Bloqueio automático de reservas que excedam os assentos disponíveis na sala.
* **Cancelamento de reservas:** Localização da reserva, liberação automática dos assentos ocupados e desativação do bilhete no sistema.

**3. Consultas e Filtros Avançados**
* **Pesquisa de sessões:** Busca dinâmica de sessões por filme, data ou sala.
* **Filtro de disponibilidade:** Exibição exclusiva de sessões que ainda possuem lugares vagos.

**4. Painel de Relatórios e Métricas**
* **Métricas de uso:** Contagem geral de sessões criadas, reservas realizadas, ingressos vendidos e lugares ainda disponíveis.
* **Taxa de ocupação:** Cálculo da porcentagem média de lotação das salas.
* **Destaques de vendas:** Identificação da sessão mais lotada e do filme campeão de bilheteria.
* **Balanço financeiro:** Cálculo do faturamento total acumulado pelas vendas.

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
│   └── script.js
│
├── imgs/
│   ├── banner-home.jpg
│   ├── poster-filme-1.jpg
│   └── poster-filme-2.jpg
│
└── icones/
```

## 🧩 Fluxo de Dados
*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">

</pre>

## 📝 Feedback da IA

> 
> 

## 🔮 Melhorias Futuras

* 

## 🖥️ Como Executar

Abra o arquivo principal no navegador ou execute o comando correspondente ao projeto.

## 👨‍💻 Autor

Desenvolvido por **Fabiano O.**

GitHub: https://github.com/Fabiano-Olivr

## 📄 Licença

Este projeto **Está em Desenvolvimento** para fins de estudo e prática.