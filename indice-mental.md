# JAVASCRIPT - ÍNDICE MENTAL DE MÉTODOS 

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
├────────────────────────────── ARRAYS
│
│   ├── Procurar
│   │   ├── indexOf()         → retorna a primeira posição encontrada
│   │   ├── lastIndexOf()     → retorna a última posição encontrada
│   │   ├── find()             → retorna o primeiro elemento de um vetor que satisfaça uma condição
│   │   │   vetor.find(elemento => condicao/funcao);
│   │   │   ⚠️ Não retorna uma cópia de objetos. Retorna uma referência ao objeto que está no vetor
│   │   │
│   │   ├── findIndex()       → retorna o índice do primeiro elemento que passa por um teste
│   │   │   vetor.findIndex(elemento => elemento.propriedade === valorBuscado)
│   │   │
│   │   └── findLastIndex()   → retorna o índice do último elemento válido que passa por um teste
│   │       vetor.findLastIndex(elemento => elemento.propriedade === valorBuscado)
│   │
│   ├── Verificar
│   │   ├── includes()        → se o valor existe no array
│   │   │   vetor.includes(valorBuscado*, indiceInicial)
│   │   │
│   │   ├── some()            → se pelo menos um elemento passa na condição
│   │   │   vetor.some(elemento => {
│   │   │       // condicao
│   │   │       return true ou false
│   │   │   });
│   │   │
│   │   ├── every()           → se todos passam na condição
│   │   │   vetor.every(elemento => {
│   │   │       // condicao
│   │   │       return true ou false
│   │   │   });
│   │   │
│   │   └── isArray()         → verifica se é um array
│   │       Array.isArray(myArray)
│   │
│   ├── Filtrar
│   │   └── filter()          → cria um novo vetor com os elementos que passam por um teste
│   │       novoVetor = vetorOriginal.filter(elemento => condicao/funcao)
│   │
│   ├── Transformar
│   │   ├── map()             → percorre cada elemento, aplica uma função de transformação e retorna um novo vetor com os resultados das transformações
│   │   │   novoVetor = vetorOriginal.map(elemento => {
│   │   │       return // regra de transformacao
│   │   │   });
│   │   │
│   │   └── reduce()          → reduz todo o vetor a um único valor
│   │       vetor.reduce((acumulador, elemento) => {
│   │           // Lógica
│   │           return acumulador;
│   │       }, valorInical)
│   │
│   ├── Iterar
│   │   └── forEach()         → executa uma ação em cada item
│   │       vetor.forEach(elemento => {// ação(ões) para executar em cada item});
│   │
│   ├── Adicionar elemento ao vetor
│   │   ├── push()            → adiciona ao final
│   │   ├── unshift()         → adiciona ao início
│   │   ├── splice()          → adiciona em qualquer posição
│   │   │    array.splice(index*, qtdItensRemover, item1, ..., itemX)
│   │   │    ⚠️ Se quise apenas adicionar 1 item, usa 0 no parâmetro qtdItensRemover. Já, se quiser apenas remover, não coloca nenhum parâmetro item.
│   │   │
│   │   └── fill()
│   │       Array(tamanho).fill(valor)
│   │
│   ├── Remover elemento do vetor
│   │   ├── pop()             → remove o último
│   │   ├── shift()           → remove o primeiro
│   │   └── splice()          → remove em qualquer posição
│   │
│   ├── Copiar
│   │   ├── slice()           → copia parte do array
│   │   │   vetorCorte = vetorOriginal.slice(indexInicail, indexFinal)
│   │   │   ⚠️ Não inclui o indexFinal
│   │   │
│   │   └── concat()          → une arrays e retorna um novo Array
│   │
│   ├── Converter
│   │   ├── join()            → transforma o vetor em string com delimitador definido
│   │   └── toString()        → converte o vetor para texto, separado por ","
│   │
│   ├── Acessar
│   │   ├── at()              → acessa posição específica (mesmo que [])
│   │   └── length            → quantidade de elementos
│   │
│   └── Ordenar
│       ├── sort()            → ordena elementos (⚠️ Os elementos são ordenados como Strings)
│       │   Para Classificar Números, use função: numeros.sort((a, b) => a - b)
│       │
│       └── reverse()         → inverte a ordem
│
├── STRINGS
│
│   ├── Buscar
│   │   ├── search()          → procura usando padrão
│   │   ├── match()           → retorna correspondências
│   │   ├── indexOf()         → primeira ocorrência
│   │   └── lastIndexOf()     → última ocorrência
│   │
│   ├── Verificar
│   │   ├── includes()        → verifica se contém um valor especificado
│   │   ├── startsWith()      → verifica começa com um valor especificado
│   │   └── endsWith()        → verifica termina com um valor especificado
│   │
│   ├── Extrair
│   │   ├── slice()           → extrai trecho
│   │   ├── substring()       → extrai por índices
│   │   ├── charAt()          → caractere na posição
│   │   ├── at()              → caractere na posição
│   │   └── length            → quantidade de caracteres
│   │
│   ├── Alterar
│   │   ├── replace()         → substitui primeira ocorrência (Localizar e Substituir)
│   │   ├── replaceAll()      → substitui todas as ocorrências
│   │   ├── trim()            → remove espaços laterais
│   │   ├── trimStart()       → remove espaços iniciais
│   │   └── trimEnd()         → remove espaços finais
│   │
│   ├── Formatar
│   │   ├── toUpperCase()     → converte para maiúsculas
│   │   ├── toLowerCase()     → converte para minúsculas
│   │   ├── padStart()        → completa no início
│   │   └── padEnd()          → completa no final
│   │
│   ├── Converter
│   │   ├── split()           → quebra em array
│   │   ├── concat()          → junta strings
│   │   ├── repeat()          → repete texto
│   │   └── fromCharCode()    → código para caractere
│   │
│   ├── Template Strings
│   │   └── `${}`             → insere variáveis
│   │
│   └── REGEX
│       ├── Buscar
│       │   └── match()           → encontra padrões e retorna um vetor com eles
│       │
│       ├── Testar
│       │   └── search()          → localiza padrão e retorna o índece onde começa
│       │
│       └── Substituir
│           ├── replace()         → troca padrão no texto
│           └── replaceAll()      → troca todas ocorrências do padrão
│
├── NUMBERS
│
│   ├── Converter
│   │   ├── Number()          → converte para número
│   │   ├── parseInt()        → inteiro
│   │   └── parseFloat()      → decimal
│   │
│   ├── Verificar
│   │   ├── isInteger()       → verifica inteiro
│   │   └── isNaN()           → verifica NaN (Não é Número)
│   │
│   └── Formatar
│       ├── toString()        → converte para texto
│       ├── toFixed()         → define a quantidade de casas decimais
│       └── toExponential()   → notação científica
│
├── MATH
│
│   ├── Arredondar
│   │   ├── round()           → inteiro mais próximo
│   │   ├── floor()           → arredonda para baixo
│   │   ├── ceil()            → arredonda para cima
│   │   └── trunc()           → remove decimais
│   │
│   ├── Potência
│   │   ├── pow()             → potência
│   │   └── sqrt()            → raiz quadrada
│   │
│   ├── Sinais
│   │   ├── abs()             → valor absoluto
│   │   └── sign()            → sinal do número
│   │
│   ├── Trigonometria
│   │   ├── sin()             → seno
│   │   └── cos()             → cosseno
│   │
│   └── Aleatório
│       └── random()          → número entre 0 e 1
│
├────────────────────────────── VARIÁVEIS
│
│   ├── Atribuição via desestruturação
│   │   Possibilita extrair dados de vetores ou objetos em variáveis distintas
│   │   let [a, b, rest] = [1, 2, 3, 4, 5] // a = 1; b = 2; c = [3, 4, 5]
│   │   
│   │   ├── Valores Padrão         → valor padrão atribuido a uma variável cado o valor retirado do vetor é undefined
│   │   │   let [a = 5, b = 7] = [1] // a = 1; b = 7
│   │   │
│   │   ├── Troca de Variáveis         → possibilita trocar os valores de duas variáveis sem precisar de variável temporária
│   │   │   [a, b] = [b, a]
│   │   │
│   │   └── Ignorar Valores         → ignorar valores das variáveis
│   │       let [a, , b] = [1, 2, 3] // a = 1; b = 3
│   │
│   ├── Variável Flag
│   │   São variáveis que sinalizam se uma determinada condição foi atingida ou se um evento aconteceu
│   │   Nomes Profissionais: isLogado, temAcesso, podeAvancar, ...
│   │
│   └── ... 
│
└── ... 
</pre>