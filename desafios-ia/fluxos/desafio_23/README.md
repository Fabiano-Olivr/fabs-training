# 🤖 Desafio: Validação de Cadastro

**Contexto:** Um sistema precisa validar cadastros antes de armazená-los.  
**O que fazer:** Crie um vetor contendo diversos usuários.

Cada usuário deve possuir:
* id
* nome
* email
* idade

Utilize funções e expressões regulares para verificar:
* Nome vazio.
* Email inválido.
* Idade menor que 18.

**Ao final, informe:**
* Quantos cadastros são válidos.
* Quantos possuem erro.
* O motivo da rejeição de cada cadastro inválido.

## 🎯 Aprendizados Praticados
- Strings e métodos string;
- Funções;
- Vetores e métodos de vetores;
- Objetos;
- RegEx e método test;
- Condicionais; etc.

## 📝 Feedback da IA

> **Feedback Técnico:** O código apresenta uma boa organização, com separação clara entre estado da aplicação, utilitários, validações, lógica principal e atualização da interface, o que facilita a leitura e a manutenção. A utilização de `map()`, f`orEach()`, `join()` e do operador `spread` demonstra domínio dos principais recursos da linguagem e uma preocupação em evitar alterações desnecessárias no estado original dos objetos. A arquitetura está consistente para o porte do projeto, embora a função de filtragem possa evoluir para retornar uma estrutura mais rica contendo tanto os cadastros válidos quanto os inválidos. **Nota: 8,8/10**. O código demonstra boa organização e entendimento dos conceitos estudados, mas ainda precisa de maior atenção aos detalhes de implementação e às pequenas decisões que impactam legibilidade, previsibilidade e manutenção para atingir um padrão mais próximo do mercado.
>
> **Erros corrigidos após o feedback:** foram identificados alguns pontos que reduzem a qualidade técnica, como uma validação incorreta (nome.length === ""), uma expressão regular contendo o intervalo A-z, que aceita caracteres inesperados, o uso de match() apenas para obter um valor booleano (sendo test() mais apropriado) e uma atribuição desnecessária dentro de um map(), gerando efeito colateral sem necessidade.
>

## 🔮 Melhorias Futuras

* [ ] Refatorar a função de filtragem para retornar uma estrutura mais rica contendo tanto os cadastros válidos quanto os inválidos.

## 👨‍💻 Autor

Desenvolvido por **Fabiano O.**