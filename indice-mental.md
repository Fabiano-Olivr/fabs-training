# JAVASCRIPT - ÍNDICE MENTAL DE MÉTODOS 

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
├────────────────────────────── ARRAYS <a href="[https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#373db6b914f580b990daeacc44a185f6](https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#373db6b914f580b990daeacc44a185f6)"><small>(Ler Mais Aqui)</small></a>
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
├────────────────────────────── STRINGS <a href="[https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#13cdb6b914f58399873301b19e81947a](https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#13cdb6b914f58399873301b19e81947a)"><small>(Ler Mais Aqui)</small></a>
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
│   └── REGEX <a href="[https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#c85db6b914f5837a884a012bd2880316](https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#c85db6b914f5837a884a012bd2880316)"><small>(Ler Mais Aqui)</small></a>
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
├────────────────────────────── NUMBERS <a href="[https://app.notion.com/p/M-todos-e-Operadores-JS-38ddb6b914f5808385d6f9431c3c8e9d?source=copy_link#38ddb6b914f58095ba2ae6f120881767](https://app.notion.com/p/M-todos-e-Operadores-JS-38ddb6b914f5808385d6f9431c3c8e9d?source=copy_link#38ddb6b914f58095ba2ae6f120881767)"><small>(Ler Mais Aqui)</small></a>
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
├────────────────────────────── MATH <a href="[https://app.notion.com/p/M-todos-e-Operadores-JS-38ddb6b914f5808385d6f9431c3c8e9d?source=copy_link#38ddb6b914f580d89849c174ce57b091](https://app.notion.com/p/M-todos-e-Operadores-JS-38ddb6b914f5808385d6f9431c3c8e9d?source=copy_link#38ddb6b914f580d89849c174ce57b091)"><small>(Ler Mais Aqui)</small></a>
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
├────────────────────────────── VARIÁVEIS <a href="[]()"><small>(Ler Mais Aqui)</small></a>
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
├────────────────────────────── DATAS <a href="[https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#394db6b914f5808f9b68ce0fd930a92d](https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#394db6b914f5808f9b68ce0fd930a92d)"><small>(Ler Mais Aqui)</small></a>
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
├────────────────────────────── setInterval() e setTimeout() <a href="[https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#3afdb6b914f580b5aebac2b7366f33dc](https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#3afdb6b914f580b5aebac2b7366f33dc)"><small>(Ler Mais Aqui)</small></a>
│
│   ├── setInterval()
│   │   Executa uma função a cada x milissegundos (1000ms = 1s)
│   │   setInterval(function, milliseconds, param1, param2, ...)
│   │   ⚠️ Para limpar um intervalo, use o id retornado do setInterval(): clearInterval(myInterval);
│   │
│   └── setTimeout()
│       Agenda a execução de outra função após um determinado tempo.
│       setTimeout(callback, tempo);
│       ⚠️ Para cancelar a execução, use o id retornado do seteTimeout(): clearTimeout()
│
├────────────────────────────── localStorage <a href="[https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#3a2db6b914f58030a7b3ff7c7a81daa5](https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#3a2db6b914f58030a7b3ff7c7a81daa5)"><small>(Ler Mais Aqui)</small></a>
│   É um espaço de armazenamento que o navegador disponibiliza para cada site. Cada domínio possui o seu.
│   ⚠️ Se os dados do navegardor forem limpos, os dados do localStorage são perdidos.
│   ARMAZENA PARES DE {"chave", "valor"}
│
│   ├── Métodos
│   │   ├── Salvar          →   localStorage.setItem(chave, valor)
│   │   ├── Ler             →   localStorage.getItem(chave)
│   │       ⚠️ Se a chave não existir, retorna null
│   │   ├── Atualizar       →   Não existe método de update, simplesmente salva novamente e o valor antigo é substituido.
│   │   ├── Remover         →   localStorage.removeItem(chave);
│   │   └── Limpar Tudo     →   localStorage.clear()
│   │
│   └── JSON.stringify()
│       ⚠️ O localStorage só salva texto. Números são convertidos em strings e objetos são {object}
│       
│       ├── JSON.stringify(objeto)          →       Transforma um objeto em texto
│       └── JSON.parse(textoObjeto)         →       Transforma o texto de volta em um objeto
│
├────────────────────────────── Funções <a href="[https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#3afdb6b914f5802d8943c965b5684102](https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#3afdb6b914f5802d8943c965b5684102)"><small>(Ler Mais Aqui)</small></a>
│   São blocos de código reutilizáveis projetados para executar uma tarefa específica. São executadas quando são chamadas ou invocadas.
│   function name(p1, p2, ...) {
│       // code to be executed
│   }
│
│   ├── Variáveis Locais
│   │   Variáveis declaradas dentro da função só podem ser acessadas de dentro da função. Logo, variáveis com o mesmo nome podem ser usadas em diferentes funções.
│   │   ⚠️ As variáveis locais são criadas quando uma função é iniciada e excluídas quando a função é concluída.
│   │
│   ├── Parâmetros e Argumentos de Função
│   │   ├── Parâmetros      →   São os nomes listados na definição de função.
│   │   ├── Argumentos      →   São os valores reais PASSADOS para, e recebidos pela função.
│   │
│   ├── Palavra Reservada arguments
│   │   Funciona como um vetor que contém a lista dos valores passados na chamada da função.
│   │   function somarNums() {
│   │       return arguments.reduce((acc, num) => {
│   │           return acc += num;
│   │       }, 0);
│   │   }
│   │
│   ├── Valores de parâmetros padrão
│   │   ⚠️ Se uma função é chamada com argumentos ausentes (menos do que declarados), os valores em falta são definidos como undefined.
│   │   É possível que os parâmetros de função tenham valores padrão, que será usado se nenhum argumento for fornecido.
│   │   function myFunction(x, y = 10) {
│   │       return x + y;
│   │   }
│   │   ⚠️ O valor padrão só é usado quando o argumento é undefined. Porque null é um valor válido. Ele não ativa o valor padrão.
│   │
│   ├── Parâmetro (...)
│   │   Permite que uma função trate um número indefinido de argumentos como um vetor:
│   │   function sum(...args) {
│   │       let sum = 0;
│   │       for (let arg of args) sum += arg;
│   │       return sum;
│   │   }
│   │
│   ├── Função Anônima
│   │   É uma função sem nome (sem identificador), que permitem definir a programação de um evento sem atribuir um nome para a função.
│   │   Apenas se utiliza a palavra reservada function() seguida do trecho de programa que queremos executar.
│   │
│   ├── Expressões de Função
│   │   É uma função armazenada em uma variável.
│   │   const multiply = function(a, b) {
│   │     return a * b;
│   │   };
│   │   Para chamar a função, devemos informar o nome da variável seguido de ().
│   │   ⚠️ A função continua sendo anônima. Quem tem nome é a variável. A variável guarda uma referência para aquela função.
│   │
│   ├── Callbacks
│   │   Um callback JavaScript é uma função passada como um argumento para outra função, que é então executado (ou "chamado de volta")
│   │   mais tarde para completar uma tarefa específica.
│   │
│   └── Arrow Functions
│       As Arrow Functions permitem uma sintaxe mais curta para expressões de função. Você pode ignorar a palavra-chave function,
│       a palavra-chave de return e a colchetes encaracolados:
│       const multiply = (a, b) => a * b;
│       ⚠️ Ela é sempre escrita como uma expressão de função.
│
├────────────────────────────── Manipulação de Erros (Error Handling Statements) <a href="[https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#375db6b914f58023af24cfacf90ebc99](https://app.notion.com/p/JavaScript-373db6b914f5803093f7d34675e68232?source=copy_link#375db6b914f58023af24cfacf90ebc99)"><small>(Ler Mais Aqui)</small></a>
│   São blocos de código especiais estruturados para prever, capturar e tratar falhas antes que elas quebrem a execução do seu aplicativo.
│   
│   ├── try... catch
│   │   _code____________________________________________________________________________________
│   │   try {
│   │       // 1. O JavaScript tenta executar este bloco de código
│   │   } catch (erro) {
│   │       // 2. Se QUALQUER linha dentro do 'try' falhar, o JS pula imediatamente para cá
│   │       
│   │       // O erro é capturado aqui na variável! 
│   │       console.warn("Aconteceu um erro de processamento: " + erro.message);
│   │       
│   │       // O site continua vivo e você pode dar um feedback para o usuário
│   │       alert("Desculpe, não conseguimos carregar seus dados agora. Tente novamente!");
│   │   }
│   │   
│   │   /* O código continua rodando feliz daqui para baixo... */
│   │   _________________________________________________________________________________________
│   │
│   ├── throw (Criando seus próprios erros)
│   │   Às vezes, o JavaScript não acha que algo é um erro técnico, mas para a regra do seu negócio aquilo está errado.
│   │   Nesses casos, você usa o throw para fabricar e disparar o seu próprio erro de propósito.
│   │   _code____________________________________________________________________________________
│   │   function sacarDinheiro(valorSaque, saldoAtual) {
│   │       if (valorSaque > saldoAtual) {
│   │           // Dispara um erro customizado que vai parar a função na hora
│   │           throw new Error("Saldo insuficiente para realizar o saque.");
│   │       }
│   │       
│   │       return saldoAtual - valorSaque;
│   │   }
│   │   
│   │   // Como usar isso com segurança:
│   │   try {
│   │       sacarDinheiro(500, 100); // Tentando sacar 500 tendo apenas 100
│   │   } catch (erro) {
│   │       console.error("Operação Bloqueada: " + erro.message); // Imprime: "Saldo Ins..."
│   │   }
│   │   _________________________________________________________________________________________
│   │
│   └── finally (A garantia de execução)
│       O finally é um bloco opcional que você pode colocar após o catch. A regra de ouro dele é: ele sempre será executado,
│       não importa se o código deu certo (entrou no try) ou se deu errado (entrou no catch).
│       ⚠️ Geralmente usado para fazer "limpezas" no sistema, como fechar conexões de banco de dados ou sumir com aquele ícone de "Carregando..." (Loading) da tela.
│       _code____________________________________________________________________________________
│       try {
│           // Mostra o ícone de carregando na tela
│           mostrarLoading(true);
│       } catch (erro) {
│           console.log("Erro de conexão.");
│       } finally {
│           // Não importa se a busca deu certo ou se caiu a internet: 
│           // Nós PRECISAMOS sumir com o ícone de carregando no final!
│           mostrarLoading(false);
│       }
│       _________________________________________________________________________________________
│   
└── ... 
</pre>