/**
 * esse script é responsável por toda a lógica do sistema.
 * 
 * autor: Fabiano O.
*/

// REFERÊNCIAS AOS ELEMENTOS HTML
const outEmprestimos = document.querySelector("#outEmprestimos");
const outQtdAtrasos = document.querySelector("#outQtdAtrasos");
const outMaiorAtraso = document.querySelector("#outMaiorAtraso");
const outQtdNoPrazo = document.querySelector("#outQtdNoPrazo");

// INICIALIZAÇÃO
iniciar();

// UTILITÁRIOS
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatarData(data) {
    return data.toLocaleDateString("pt-BR");
}

function gerarLivroAleatorio() {
    const livros = ["O Último Suspiro das Estrelas", "Crônicas do Relógio de Areia",
        "A Cidade dos Mantos Cinzentos", "O Enigma da Bússola Quebrada", "Tratado de Botânica Oculta",
        "Cartas para o Inverno", "A Biblioteca das Sombras Perdidas", "O Algoritmo do Silêncio",
        "Murmúrios do Abismo", "A Arquitetura dos Sonhos", "Herdeiros da Névoa", "O Mistério da Quinta Lua",
        "Espelhos da Memória", "O Tecelão de Destinos", "Fragmentos de um Mundo Esquecido"];
    return livros[gerarNumeroAleatorio(0, livros.length - 1)];
}

function gerarNomeAleatorio() {
    const nomes = ["Ana Clara Silva", "Lucas Eduardo Santos", "Beatriz Lima", "Gabriel Souza",
        "Mariana Oliveira", "Mateus Ferreira", "Sofia Rodrigues", "Guilherme Alves", "Helena Costa",
        "Thiago Ribeiro", "Isabela Carvalho", "Enzo Gabriel Martins", "Camila Rocha", "Rafael Barbosa",
        "Lívia Ramos"];
    return nomes[gerarNumeroAleatorio(0, nomes.length - 1)];
}

function gerarDataAleatoria() {
    const data = new Date();
    const diasModificadores = gerarNumeroAleatorio(0, 45);

    const adicionarDias = gerarNumeroAleatorio(0, 1) === 1;
    if (adicionarDias) {
        data.setDate((data.getDate() + diasModificadores));
    } else {
        data.setDate((data.getDate() - diasModificadores));
    }

    return data;
}

// FUNÇÕES AUXILIÁRES
function gerarEmprestimos() {
    const qtdEmprestimos = gerarNumeroAleatorio(1, 10);
    const emprestimosGerados = [];

    for (let i = 0; i < qtdEmprestimos; i++) {
        const dataEmprestimo = gerarDataAleatoria();
        const dataDevolucao = new Date(dataEmprestimo.getTime());
        dataDevolucao.setDate(dataDevolucao.getDate() + 10);

        const emprestimo = {
            livro: gerarLivroAleatorio(),
            aluno: gerarNomeAleatorio(),
            dataEmprestimo: dataEmprestimo,
            dataDevolucao: dataDevolucao
        }

        emprestimosGerados.push(emprestimo);
    }

    return emprestimosGerados
}

function renderizarEmprestimos(emprestimos) {
    let listaEmprestimos = "";
    emprestimos.forEach((emprestimo, i) => {
        listaEmprestimos += `Emprestimo Nº${i + 1}: Livro: ${emprestimo.livro}\nAluno: ${emprestimo.aluno}\n` +
            `Data do Empréstimo: ${formatarData(emprestimo.dataEmprestimo)} - ` +
            `Data P/Devolução: ${formatarData(emprestimo.dataDevolucao)}\n\n`;
    });
    
    outEmprestimos.innerText = listaEmprestimos;
}

function renderizarRelatorio(relatorio) {
    outQtdAtrasos.innerText = relatorio.qtdAtrasos + " Livro(s) Atrasado(s);";
    outQtdNoPrazo.innerText = relatorio.qtdNoPrazo + " Livro(s) no Prazo";
    if (relatorio.maiorAtraso === null) {
        outMaiorAtraso.innerText = "Não há empréstimos atrasados.";
    } else {
        outMaiorAtraso.innerHTML = `<pre>\nLivro: ${relatorio.maiorAtraso.livro} - Aluno: ${relatorio.maiorAtraso.aluno}\n` + 
        `Data do Empréstimo: ${formatarData(relatorio.maiorAtraso.dataEmprestimo)} - Data P/Devolução: ${formatarData(relatorio.maiorAtraso.dataDevolucao)}</pre>`;
    }
}

// FUNÇÕES PRINCIPAIS
function iniciar() {
    const emprestimos = gerarEmprestimos();
    renderizarEmprestimos(emprestimos);

    const relatorio = gerarRelatorio(emprestimos);
    renderizarRelatorio(relatorio);
}

function gerarRelatorio(emprestimos) {
    const hoje = new Date();
    const emprestimosAtrasados = emprestimos.filter(emprestimo => emprestimo.dataDevolucao < hoje);

    const qtdAtrasos = emprestimosAtrasados.length;
    const qtdNoPrazo = emprestimos.length - qtdAtrasos;
    let maiorAtraso = null;
    if (qtdAtrasos > 0) {
        maiorAtraso = emprestimosAtrasados[0];
        emprestimosAtrasados.slice(1).forEach(element => {
            if (element.dataDevolucao < maiorAtraso.dataDevolucao) {
                maiorAtraso = element;
            }
        });
    }

    return {
        qtdAtrasos: qtdAtrasos,
        qtdNoPrazo: qtdNoPrazo,
        maiorAtraso: maiorAtraso
    };
}