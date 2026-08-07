/**
 * esse script é responsável por todo o processo do sistema.
 * 
 * autor: Fabiano O.
 */

// ESTADOS DO SISTEMA, CONSTANTES E VARIÁVEIS
const ESTADOS_SISTEMA = {
    cadastros: [],
    cadsInvalidos: []
}

// REFERÊNCIAS AOS ELEMENTOS HTML
const outQtdValidos = document.getElementById("outQtdValidos");
const outQtdInvalidos = document.getElementById("outQtdInvalidos");
const outErros = document.getElementById("outErros");

// INICIALIZAÇÃO
iniciar();

// UTILITÁRIOS
function gerarNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNÇÕES AUXILIÁRES
function gerarCadastros(qtdCadastros) {
    const cadastrosGerados = [];
    const nomes = ["Marcos Silva", "Maria Oliveira", "Pedro Santos", "Ana Souza", "Carlos Ferreira", "",
        "Juliana Lima", "Rafael Costa", "#.", "", "Camila Barbosa", "Gabriel Martins",
        "Beatriz 2", "Thiago Pereira", "1"];
    const emails = ["@gmail.com", "@outlook.com", "@hotmail.com", "@yahoo.com.br",
        "@icloud.com", "@empresa.com.br", "@dominio", "@mail@", "@teste..com", "", "@universidade.edu.br",
        "@123.com", "@.com", "@email#dominio.com", "@1"];
    const qtdNomes = nomes.length;

    for (let i = 0; i < qtdCadastros; i++) {
        const indexAleatorio = gerarNum(0, qtdNomes - 1);
        const nomeAleatorio = nomes[indexAleatorio];
        const emailAleatorio = nomeAleatorio.replace(" ", "").toLowerCase()
            + emails[indexAleatorio];
            
        const cadastro = {
            id: crypto.randomUUID().substring(0, 4),
            nome: nomeAleatorio,
            email: emailAleatorio,
            idade: gerarNum(12, 25)
        }
        cadastrosGerados.push(cadastro);
    }

    return cadastrosGerados;
}

function validarNome(nome) {
    let isValido = true;
    if (nome.trim() === "" || !isNaN(nome)) {
        isValido = false;
    } else if (!!nome.match(/([^a-zA-Z ])/gi)) {
        isValido = false;
    }
    return isValido;
}

function validarEmail(email) {
    const regEx = /^\w+@[a-z]{3,}(\.\w{2,})+$/;
    return regEx.test(email);
}

function atualizarUI(qtdValidos, qtdInvalidos, motivosErros) {
    outQtdValidos.value = qtdValidos;
    outQtdInvalidos.value = qtdInvalidos;
    outErros.innerText = motivosErros;
}

// FUNÇÕES PRINCIPAIS
function iniciar() {
    ESTADOS_SISTEMA.cadastros = gerarCadastros(gerarNum(1, 20));
    ESTADOS_SISTEMA.cadsInvalidos = filtrarCadastros(ESTADOS_SISTEMA.cadastros);
    gerarRelatorios(ESTADOS_SISTEMA.cadastros, ESTADOS_SISTEMA.cadsInvalidos, atualizarUI);
}

function filtrarCadastros(cadastros) {
    const cadsInvalidos = [];
    
    cadastros.forEach(cad => {
        let logErros = "";
        if (!validarNome(cad.nome)) {
            logErros += "* Nome não Definido/Inválido\n";
        }
        if (!validarEmail(cad.email)) {
           logErros += "* E-Mail Inválido\n"; 
        }
        if (cad.idade < 18) {
            logErros += "* Menor de 18 Anos\n";
        }

        if (logErros != "") {
            cadsInvalidos.push(
                {
                    ...cad,
                    erros: logErros
                }
            )
        }
    });

    return cadsInvalidos;
}

function gerarRelatorios(cadastros, cadsInvalidos, callback) {
    const qtdInvalidos = cadsInvalidos.length;
    const qtdValidos = cadastros.length - qtdInvalidos;
    const motivosErros = cadsInvalidos.map(cad => 
        `Cadastro ${cad.id}\n${cad.erros}\n`
    ).join("");

    callback(qtdValidos, qtdInvalidos, motivosErros);
}