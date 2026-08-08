# 🤖 Desafio: Busca Inteligente de Produtos

**Contexto:** Um cliente pesquisou um produto na loja.  
**O que fazer:** Crie um vetor contendo vários produtos.

*Receba uma palavra para pesquisa*.  
**A busca deve:**
* Ignorar letras maiúsculas e minúsculas.
* Ignorar espaços extras digitados.
* Encontrar produtos cujo nome contenha o texto pesquisado.

**Ao final, informe:**
* Quantos produtos foram encontrados.
* Os nomes encontrados.
* Caso nenhum seja encontrado, exiba uma mensagem apropriada.

## 🎯 Aprendizados Praticados
- Vetores e Métodos de Vetores;
- Math.random();
- Funções;
- Condicionais;
- RegEx;
- Eventos (`input`);

## 📝 Feedback da IA

> **Feedback Técnico:** O código apresenta boa organização estrutural, com separação entre estado, referências do DOM, inicialização, utilitários, funções auxiliares, lógica principal e eventos, além do uso adequado de `filter()`, callbacks e do evento `input` para implementar a busca dinâmica. **Nota: 8,2/10.** A implementação demonstra domínio crescente dos fundamentos de JavaScript e uma organização razoável, mas ainda exige maior atenção aos detalhes comportamentais das APIs utilizadas e à redução de complexidade desnecessária para alcançar um padrão profissional.
>
> **Erros corrigidos após o feedback:** Foram identificados problemas técnicos relevantes: a utilização da flag `g` em conjunto com `RegExp.prototype.test()` dentro do `filter()` pode produzir resultados inconsistentes devido ao estado interno `lastIndex`, e o texto fornecido pelo usuário é utilizado diretamente como padrão de regex, fazendo com que caracteres especiais sejam interpretados como operadores em vez de texto literal. Também há pontos menores de qualidade, como o uso de `!=` em vez de `!==`, um `reduce()` que pode ser substituído por `map().join()`, e uma lógica desnecessariamente complexa para gerar valores booleanos. O uso de `callback` em `buscarProdutos()` é válido para o exercício, mas a abstração deve ser reavaliada em um código real, pois a função poderia simplesmente retornar os resultados e deixar o chamador decidir o que fazer com eles.
>

## 👨‍💻 Autor

Desenvolvido por **Fabiano O.**