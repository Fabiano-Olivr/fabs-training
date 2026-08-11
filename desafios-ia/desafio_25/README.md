# 🤖 Desafio: Sistema de Biblioteca

**Contexto:** Uma biblioteca deseja acompanhar empréstimos.  
**O que fazer:** Crie um vetor de objetos contendo:
* livro
* aluno
* dataEmprestimo
* dataDevolucao

Utilizando `Date`, informe:
* Quantos empréstimos estão atrasados.
* Qual empréstimo possui o maior atraso.
* Quantos livros ainda estão dentro do prazo.

## 🎯 Aprendizados Praticados
- Funções;
- Datas e Métodos Data;
- Vetores e Métodos de Vetores;
- Laços de Repetição;
- Condicionais;
- Strings e Métodos Strings;
- Objetos;

## 📝 Feedback da IA

> **Feedback Técnico:** O código apresenta uma estrutura organizada e demonstra evolução na separação entre geração de dados, processamento e apresentação, utilizando adequadamente recursos como `Date`, `filter()`, `forEach()`, funções auxiliares e parâmetros rest. A criação de uma nova instância de Date para calcular a data de devolução também evita a alteração acidental do objeto original. **Nota: 8,2/10**. A solução demonstra bom domínio dos fundamentos e uma organização razoável, mas precisa evoluir principalmente em separação de responsabilidades, consistência dos contratos das funções e tratamento de casos de borda para se aproximar de um padrão profissional.
>
> **Erros corrigidos após o feedback:** Existem problemas que precisam ser corrigidos antes de considerar a implementação robusta: `gerarEmprestimos()` possui responsabilidade adicional de atualizar a interface, `atualizarUI()` concentra comportamentos distintos e decide o que fazer com base nos argumentos recebidos, aumentando o acoplamento, e `gerarRelatorio()` retorna tipos diferentes para `maiorAtraso` dependendo da situação, utilizando uma string quando não existem atrasos e um objeto quando existem, o que pode provocar erro ao tentar acessar propriedades como `dataEmprestimo`. Também há pequenas oportunidades de melhoria, como remover `break` após `return`, evitar `slice()` com o tamanho do próprio array, substituir abreviações pouco necessárias e tornar algumas conversões implícitas mais explícitas.
>

## 👨‍💻 Autor

Desenvolvido por **Fabiano O.**