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
function gerarNumAleatorio(min, max) {
    /**
     * Gera um número aleatório em um intervalo definido
     */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarInfosAleatorias(tipo) {
    /**
     * Gera um nome de um livro, de uma pessoa ou uma data aleatória.
     */
    const livros = ["O Último Suspiro das Estrelas", "Crônicas do Relógio de Areia",
        "A Cidade dos Mantos Cinzentos", "O Enigma da Bússola Quebrada", "Tratado de Botânica Oculta",
        "Cartas para o Inverno", "A Biblioteca das Sombras Perdidas", "O Algoritmo do Silêncio",
        "Murmúrios do Abismo", "A Arquitetura dos Sonhos", "Herdeiros da Névoa", "O Mistério da Quinta Lua",
        "Espelhos da Memória", "O Tecelão de Destinos", "Fragmentos de um Mundo Esquecido"];
    const pessoas = ["Ana Clara Silva", "Lucas Eduardo Santos", "Beatriz Lima", "Gabriel Souza",
        "Mariana Oliveira", "Mateus Ferreira", "Sofia Rodrigues", "Guilherme Alves", "Helena Costa",
        "Thiago Ribeiro", "Isabela Carvalho", "Enzo Gabriel Martins", "Camila Rocha", "Rafael Barbosa",
        "Lívia Ramos"];

    const indexAleatorio = gerarNumAleatorio(0, livros.length - 1);
    switch (tipo) {
        case "livro":
            return livros[indexAleatorio];
            break;
        case "nome":
            return pessoas[indexAleatorio];
            break;
        case "data":
            const data = new Date();
            const diasModificadores = gerarNumAleatorio(0, 45);

            if (gerarNumAleatorio(0, 1)) {
                data.setDate((data.getDate() + diasModificadores));
            } else {
                data.setDate((data.getDate() - diasModificadores));
            }

            return data;
            break;
    }
}

// FUNÇÕES AUXILIÁRES
function gerarEmprestimos() {
    /**
     * Gera um vetor de objetos emprestimos aleatórios.
     */
    const qtdEmprestimos = gerarNumAleatorio(1, 10);
    const emprestimosGerados = [];

    for (let i = 0; i < qtdEmprestimos; i++) {
        const dataEmp = gerarInfosAleatorias("data");
        const dataDev = new Date(dataEmp.getTime());
        dataDev.setDate(dataDev.getDate() + 10);

        const emprestimo = {
            livro: gerarInfosAleatorias("livro"),
            aluno: gerarInfosAleatorias("nome"),
            dataEmprestimo: dataEmp,
            dataDevolucao: dataDev
        }

        emprestimosGerados.push(emprestimo);
    }

    atualizarUI(emprestimosGerados, outEmprestimos);
    return emprestimosGerados
}

function atualizarUI(informacoes, ...elementos) {
    if (elementos.length === 1 && elementos[0] === outEmprestimos) {
        let listaEmprestimos = "";
        informacoes.forEach((emprestimo, i) => {
            listaEmprestimos += `Emprestimo Nº${i + 1}: Livro: ${emprestimo.livro}\nAluno: ${emprestimo.aluno}\n` + 
                `Data do Empréstimo: ${emprestimo.dataEmprestimo.toLocaleDateString()} - ` + 
                `Data P/Devolução: ${emprestimo.dataDevolucao.toLocaleDateString()}\n\n`;
        });

        outEmprestimos.innerText = listaEmprestimos;
    } else {
        outQtdAtrasos.innerText = informacoes.qtdAtrasos + " Livro(s) Atradaso(s);";
        outQtdNoPrazo.innerText = informacoes.qtdNoPrazo + " Livro(s) no Prazo";
        outMaiorAtraso.innerText = `\nLivro: ${informacoes.maiorAtraso.livro} - Aluno: ${informacoes.maiorAtraso.aluno}
                Data do Empréstimo: ${informacoes.maiorAtraso.dataEmprestimo.toLocaleDateString()} - Data P/Devolução: ${informacoes.maiorAtraso.dataDevolucao.toLocaleDateString()}`;
    }
}

// FUNÇÕES PRINCIPAIS
function iniciar() {
    const emprestimos = gerarEmprestimos();
    const relatorio = gerarRelatorio(emprestimos);
    atualizarUI(relatorio, outQtdAtrasos, outQtdNoPrazo, outMaiorAtraso);
}

function gerarRelatorio(emprestimos) {
    /**
     * Gera um relatório contendo o emprestimos mais atrasado, e a quantidade de empréstimos
     * atrasados e no prazo.
     */
    const hoje = new Date();
    const emprestimosAtrasados = emprestimos.filter(emp => emp.dataDevolucao < hoje);

    const qtdAtrasos = emprestimosAtrasados.length;
    const qtdNoPrazo = emprestimos.length - qtdAtrasos;
    let maiorAtraso;
    if (qtdAtrasos === 0) {
        maiorAtraso = "Não há emprestimos Atrasados";
    } else {
        maiorAtraso = emprestimosAtrasados[0];
        emprestimosAtrasados.slice(1, qtdAtrasos).forEach(element => {
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