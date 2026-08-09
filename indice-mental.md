# JAVASCRIPT - ÍNDICE MENTAL DE MÉTODOS 

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
├────────────────────────────── ARRAYS
│
│   ├── Procurar
│   │   ├── indexOf()         → retorna a primeira posição encontrada
│   │   ├── lastIndexOf()     → retorna a última posição encontrada
│   │   ├── find()            → retorna o primeiro elemento de um vetor que satisfaça uma condição
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
├────────────────────────────── STRINGS
│
│   ├── Buscar
│   │   ├── search()          → procura a primeira correspondência usando padrão e retorna o índice de onde ela começa
│   │   │   string.search(regexp) ou string.search(valor)
│   │   │   ⚠️ ignora a flag 'g'
│   │   │
│   │   ├── match()           → retorna correspondências de um valor em uma string
│   │   │   let resultado = string.match(match)
│   │   │   ⚠️ O parâmetro match deve ser uma /expressaoRegular/gi ou um /texto/gi
│   │   │
│   │   ├── indexOf()         → primeira ocorrência
│   │   └── lastIndexOf()     → última ocorrência
│   │       ⚠️ indexOf() e lastIndexOf() retornam -1 se a busca não for localizada na String
│   │
│   ├── Verificar
│   │   ├── includes()        → verifica se contém um valor especificado
│   │   ├── startsWith()      → verifica a string começa com um valor especificado
│   │   └── endsWith()        → verifica a string  termina com um valor especificado
│   │
│   ├── Extrair
│   │   ├── slice()                 → extrai uma parte de uma string
│   │   │   novaString = stringOriginal.slice(start, end)
│   │   │   ⚠️ end não incluído
│   │   │
│   │   ├── substring()             → extrai por índices
│   │   │   novaString = stringOriginal.substring(start, end)
│   │   │   ⚠️ end não incluído
│   │   │
│   │   ├── charAt(), at() e []     → caractere em indice/posição específica
│   │   └── length                  → quantidade de caracteres
│   │
│   ├── Alterar
│   │   ├── replace()         → substitui primeira ocorrência (Localizar e Substituir)
│   │   │   let novaString = stringOriginal.replace(termoBuscado, termoSubstituto)
│   │   │
│   │   ├── replaceAll()      → substitui todas as ocorrências
│   │   │   let novaString = stringOriginal.replaceAll(termoBuscado, termoSubstituto)
│   │   │
│   │   ├── trim()            → remove espaços laterais
│   │   ├── trimStart()       → remove espaços iniciais
│   │   └── trimEnd()         → remove espaços finais
│   │
│   ├── Formatar
│   │   ├── toUpperCase()     → converte para maiúsculas
│   │   ├── toLowerCase()     → converte para minúsculas
│   │   ├── padStart()        → completa no início
│   │   └── padEnd()          → completa no final
│   │       stringOriginal.padStart(tamanhoAlvo, StringDePreenchimento)
│   │
│   ├── Converter
│   │   ├── split()           → quebra em array
│   │   ├── concat()          → junta strings
│   │   │   text3 = text1.concat(text2)
│   │   │
│   │   ├── repeat()          → repete texto
│   │   │   "*".repeat(3) // ***
│   │   │
│   │   └── fromCharCode()    → código para caractere
│   │       String.fromCharCode(65) // "A"
│   │
│   ├── Template Strings
│   │   └── `${}`             → insere variáveis
│   │
│   └── REGEX
│       ├── Criar uma RegEx
│       │   let expressReg = new RegExp(termo_de_busca, bandeiras_de_comportamento)
│       │   let expressReg = /[a-z]/gi;
│       │
│       ├── Buscar
│       │   └── match()         → encontra padrões e retorna um vetor com eles
│       │
│       ├── Testar
│       │   └── search()        → localiza padrão e retorna o índece onde começa
│       │
│       └── Substituir
│           ├── replace()       → troca padrão no texto
│           └── replaceAll()    → troca todas ocorrências do padrão
│
├────────────────────────────── NUMBERS
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
├────────────────────────────── MATH
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
│   │   ├── Troca de Variáveis     → possibilita trocar os valores de duas variáveis sem precisar de variável temporária
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
├────────────────────────────── DATAS
│   Objetos de data são estatáticos, e são criados com construtor new Date()
│   Por padrão, o Java Script usará o fusohorário do navegador.
│   ⚠️ O JS armazena datas como milissegundos, desde 01 de janeiro de 1970. Um dia (24 horas) é 86.400.000 milissegundos
│       1 dia = 24hor x 60min x 60seg x1000mseg: 86400000
│
│   ├── Criação de Objetos de Data
│   │   ├── new Date()
│   │   ├── new Date(date String)
│   │   ├── new Date(ano, mes)
│   │   ├── new date(ano, mes, dia)
│   │   ├── new date(ano, mes, dia, horas)
│   │   ├── new date(ano, mes, dia, horas, minutos)
│   │   ├── new date(ano, mes, dia, horas, minutos, segundos)
│   │   ├── new date(ano, mes, dia, horas, minutos, segundos, ms)
│   │   └── new date(milissegundos)
│   │   ⚠️ Em JS, objetos (incluindo datas) são passados por regerência e não por valor.
│   │   ⚠️ Os mêses são contados de 0 a 11.Se informar um mês maior que 11, haverá o transbordamento automático
│   │
│   ├── ISO Dates
│   │   A sintaxe ISO (YYY-MM-DD) é o formato preferido no JavaScript.
│   │   
│   │   ├── const d = new Date("2015-03-2025")
│   │   │   Dependendo do fuso horário, o resultado irá variar entre 24 de março e 25 de março
│   │   │
│   │   └── new Date(YYYY-MM-DDTHH:MM:SSZ)
│   │       A letra 'Z' define o tempo UTC (Tempo Universal Coordenado = +00:00)
│   │       Para modificar o fuso horário em relação ao UTC, remova o 'Z' e adicione '+HH:MM' OU '-HH:MM' (fuso horário)
│   │       ⚠️ Se na criação não determinar o fusohorário, o JS usará o fuso do navegador.
│   │
│   ├── Métodos de Data
│   │   Date.parse()         → converter STRING DE DATA para msec
│   │   ⚠️ Para converter milissegundos em data, use o cosntrutor: new Date(msec)
│   │   .toDateString()      → converte em uma String com um formato mais legível ('Tue Jun 30 2026')
│   │   .toUTCString()       → converte em uma String com padrão UTC ('Tue, 30 Jun 2026 09:04:47 GMT')
│   │   .toISOString()       → converte em uma String com padrão ISO ('2026-0630T09:06:904Z')
│   │   
│   │   ├── Métodos Get
│   │   │   Retornam a hora local
│   │   │   
│   │   │   ├── .getFullYear()          → retorna o ano de uma data como um número de 4 dígitos
│   │   │   ├── .getMonth()             → retorna o mês de uma data como um número (0-11)
│   │   │   ├── .getDate()              → retorna o dia de uma data como um número (0-31)
│   │   │   ├── .getHours()             → retorna as horas de uma data como um número (0-23)
│   │   │   ├── .getMinutes()           → retorna os minutos de uma data como um número (0-59)
│   │   │   ├── .getSeconds()           → retorna os segundos de uma data como um número (0-59)
│   │   │   ├── .getMiliseconds()       → retorna os milissegundos de uma data como um número (0-999)
│   │   │   ├── .getDay()               → retorna o dia da semana de uma data como um número (0-6)
│   │   │   │    ⚠️ Em JS, o primeiro dia da semana (dia 0) é domingo.
│   │   │   ├── .getTime()              → retorna o número de milissegundos desde 1º de janeiro de 1970
│   │   │   ├── .Date.now()             → retorna o número de milissegundos desde 1º de janeiro de 1970
│   │   │   │    ⚠️ Esse é um método estático do objeto Data. Não pode ser usado em um objeto de data, como 'myDate.now'. A sintaxe é sempre Date.now();
│   │   │   └── .getTimezoneOffset()    → retorna a diferênça (em minutos) entre a hora local e uma hora UTC
│   │   │        let diff = d.getTimezoneOffset()
│   │   │
│   │   └── Métodos Set
│   │       Permitem definir valores de data (anos, meses, dias, horas, minutos, segundos, milissegundos) para um objeto de Data
│   │       
│   │       ├── .setFullYear()      → define o ano de um objeto de data
│   │       ├── .setMonth()         → define o mês de um objeto de data (0-11)
│   │       ├── .setDate()          → define o dia de um objeto de data (0-31)
│   │       ├── .setHours()         → define as horas de um objeto de data (0-23)
│   │       ├── .setMinutes()       → define os minutos de um objeto de data (0-59)
│   │       └── .setSeconds()       → define os segundos de um objeto de data (0-59)
│   │       
│   └── Metodos de formatação de Data usando Convenções de Localidade
│       ├── .toLocaleDateString("pt-BR")      → Retorna a data formatada, usando convenções de localidade
│       ├── .toLocaleTimeString("pt-BR")      → Retorna o tempo formatado, usando convenções de localidade
│       └── .toLocaleString("pt-BR")          → Retorna data e hora formatado, usando convenções de localidade
│
├────────────────────────────── setInterval() e setTimeout()
│
│   ├── setInterval()
│   │   ...
│   │
│   └── setTimeout()
│       ...
│    
└── ... 
</pre>