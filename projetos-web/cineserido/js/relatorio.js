/**
 * esse script é resposnável por gerar e renderizar o relatório do cinema.
 * 
 * autor: Fabiano O.
 */

// IMPORTE DE MÓSULOS E DEPENDÊNCIAS
import { recuperarDados } from "./storage.js";

// REFERÊNCIAS AOS ELEMENTOS HTML
const outTotalSessoes = document.querySelector("#total-sessoes");
const outIngressosVendidos = document.querySelector("#ingressos-vendidos");
const outLugaresDisponiveis = document.querySelector("#lugares-disponiveis");
const outTaxaOcupacao = document.querySelector("#taxa-ocupacao");
const outSecaoLotada = document.querySelector("#sessao-lotada");
const outFilmeMaisVendido = document.querySelector("#filme-mais-vendido");
const outFaturamentoTotal = document.querySelector("#faturamento-total");

// FUNÇÕES AUXILIÁRES
function atualizarUi(totalSecoes, qtdIngressosVendidos, qtdLugaresDisponiveis, taxaDeOcupacao, maiorLotacao, filmeMaisVendido, faturamentoTotal) {
    outTotalSessoes.innerText = totalSecoes;
    outIngressosVendidos.innerText = qtdIngressosVendidos;
    outLugaresDisponiveis.innerText = qtdLugaresDisponiveis;
    outTaxaOcupacao.innerText = `${taxaDeOcupacao.toFixed(2)}%`;
    if (qtdIngressosVendidos > 0) {
        outSecaoLotada.innerText = `${maiorLotacao.filme.nome}\n(${maiorLotacao.data} - ${maiorLotacao.horario})`;
        outFilmeMaisVendido.innerText = `${filmeMaisVendido.nome} (${filmeMaisVendido.qtdIngressosVendidos})`;
        outFaturamentoTotal.innerText = `R$ ${faturamentoTotal.toFixed(2)}`;
    }
}

// FUNÇÕES PRINCIPAIS
function inicializarEventos() {
    const secoes = recuperarDados("secoes");
    if (secoes) {
        gerarRelatorio(secoes, atualizarUi);
    }
}

function gerarRelatorio(listaDeSecoes, callback) {
    const totalSecoes = listaDeSecoes.length;
    const qtdIngressosVendidos = contarIngressos(listaDeSecoes);
    const qtdLugaresDisponiveis = contarLugaresLivres(listaDeSecoes, qtdIngressosVendidos);
    const taxaDeOcupacao = calcularTaxaOcupacao(qtdIngressosVendidos, qtdLugaresDisponiveis);
    if (qtdIngressosVendidos > 0)  {
        const maiorLotacao = idetificarMaiorLotacao(listaDeSecoes);
        const filmeMaisVendido = identificarMaisVendido(listaDeSecoes);
        const faturamentoTotal = calcularFaturamento(listaDeSecoes);
        callback(totalSecoes, qtdIngressosVendidos, qtdLugaresDisponiveis, taxaDeOcupacao, maiorLotacao, filmeMaisVendido, faturamentoTotal);
    } else {
        callback(totalSecoes, qtdIngressosVendidos, qtdLugaresDisponiveis, taxaDeOcupacao);
    }
}

function contarIngressos(listaDeSecoes) {
    return listaDeSecoes.reduce((acc, secao) => {
        acc += secao.ingressosVendidos.length;
        return acc;
    }, 0);
}

function contarLugaresLivres(listaDeSecoes, qtdIngressosVendidos) {
    return listaDeSecoes.reduce((acc, secao) => {
        acc += Number(secao.capacidadeSala);
        return acc;
    }, 0) - qtdIngressosVendidos;
}

function calcularTaxaOcupacao(qtdIngressosVendidos, qtdLugaresDisponiveis) {
    return (qtdIngressosVendidos / qtdLugaresDisponiveis * 100);
}

function idetificarMaiorLotacao(listaDeSecoes) {
    let maiorLotacao = listaDeSecoes[0];
    const mlIngressosVendidos = contarIngressos([maiorLotacao]);
    const mlTaxaOcupacao = calcularTaxaOcupacao(mlIngressosVendidos, contarLugaresLivres([maiorLotacao], mlIngressosVendidos));
    listaDeSecoes.forEach(secao => {
        const sIngressosVendidos = contarIngressos([secao]);
        const sTaxaOcupacao = calcularTaxaOcupacao(sIngressosVendidos, contarLugaresLivres([secao], sIngressosVendidos));
        if (sTaxaOcupacao > mlTaxaOcupacao)
            maiorLotacao = secao;
    });
    return maiorLotacao;
}

function identificarMaisVendido(listaDeSecoes) {
    const relatorioFilmes = [];
    const filmeUnico = new Set();

    for (const secao of listaDeSecoes) {
        const idFilme = secao.filme.id;
        if (filmeUnico.has(idFilme)) {
            relatorioFilmes.find(filme => filme.id === idFilme).qtdIngressosVendidos += contarIngressos([secao]);
            continue;
        }

        filmeUnico.add(idFilme);
        relatorioFilmes.push({
            id: idFilme,
            nome: secao.filme.nome,
            qtdIngressosVendidos: contarIngressos([secao])
        });
    }

    const filmeMaisVendido = relatorioFilmes.reduce((max, atual) => {
        return atual.qtdIngressosVendidos > max.qtdIngressosVendidos ? atual : max;
    }, relatorioFilmes[0]);
    return filmeMaisVendido;
}

function calcularFaturamento(listaDeSecoes) {
    let faturamentoTotal = 0;
    for (const secao of listaDeSecoes) {
        faturamentoTotal += contarIngressos([secao]) * secao.precoIngresso;
    }
    return faturamentoTotal;
}

// INICIALIZAÇÃO
inicializarEventos();