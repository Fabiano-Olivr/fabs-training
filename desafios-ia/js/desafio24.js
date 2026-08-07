/**
 * esse script é responsável por todas as partes do sistema.
 * 
 * autor: Fabiano O.
 */

// VARIÁVEIS, ESTADOS E CONSTANTES
const ESTADOS = {
    produtos: []
};

// REFERÊNCIA AOS ELEMENTOS HTML
const formularioBusca = document.querySelector("#formulario-busca");
const inBusca = document.querySelector("#inBusca");
const btBuscar = document.querySelector("#btBuscar");
const btLimpar = document.querySelector("#btLimpar");
const secaoResultado = document.querySelector("#outResultado");

// INICIALIZAÇÃO
// iniciar();

// UTILITÁRIOS
function gerarNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortearNome(isComposicao) {
    if (isComposicao) {
        const composicaoProdutos = ["de alta performance", "recondicionado", "original", "linha pesada",
        "com reservatório", "esportivo", "reforçado", "de cerâmica", "blindado", "ajustável",
        "ventilado", "de alumínio", "universal", "de silicone", "de borracha"];
        const indexComposicaoProdutos = gerarNumAleatorio(0, composicaoProdutos.length - 1);
        return composicaoProdutos[indexComposicaoProdutos];
    } else {
        const produtosPrincipais = ["Amortecedor dianteiro", "Pastilha de freio", "Filtro de óleo",
        "Vela de ignição", "Bomba de combustível", "Disco de freio", "Correia dentada",
        "Alternador", "Radiador", "Bateria", "Embreagem", "Pneu", "Junta do cabeçote",
        "Sensor de oxigênio", "Coifa da homocinética", "Terminal de direção", "Bobina de ignição",
        "Filtro de ar", "Bucha da bandeja", "Cilindro mestre", "Sapatas de freio", "Termostato",
        "Farol", "Lanternas traseiras", "Coxim do motor", "Palheta do limpador",
        "Interruptor de óleo", "Bomba de água", "Cabo de vela", "Mangueira do radiador"];
        const indexProdutosPrincipais = gerarNumAleatorio(0, produtosPrincipais.length - 1);
        return produtosPrincipais[indexProdutosPrincipais];
    }
}

// FUNÇÕES AUXILIÁRES
function gerarProdutos() {
    const qtdProdutos = gerarNumAleatorio(30, 100);
    const produtosGerados = [];

    for (let i = 0; i < qtdProdutos; i++) {
        let produto = sortearNome();

        const isProdutoComposto = gerarNumAleatorio(0, 1) === 0 ? false : true;
        if (isProdutoComposto) {
            produto += ` ${sortearNome("composicao")}`;
        }

        produtosGerados.push(produto);
    }

    return produtosGerados;
}

// FUNÇÕES PRINCIPAIS
function iniciar() {
    ESTADOS.produtos = gerarProdutos();
}