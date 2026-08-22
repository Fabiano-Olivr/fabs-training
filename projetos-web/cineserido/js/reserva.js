/**
 * esse script é responsável pelo processo de reservar ingressos...
 * 
 * autor: Fabiano O.
 */

// IMPORTS DE MÓDULOS E DEPENDÊNCIAS
import { recuperarDados, salvarDados } from "./storage.js";

// REFERÊNCIAS AOS ELEMENTOS HTML 
const outNomeFilme = document.querySelector("#nome-filme");
const outSalaSecao = document.querySelector("#numero-sala");
const outHorarioSecao = document.querySelector("#horario-secao");

// FUNÇÕES AUXILIÁRES
function renderizarInformacoesSecao(secao) {
    const dataSecaoFormat = new Date(`${secao.data}T${secao.horario}`).toLocaleDateString();

    outNomeFilme.innerText = secao.filme.nome;
    outSalaSecao.innerText = secao.sala;
    outHorarioSecao.innerText = `${dataSecaoFormat} às ${secao.horario}`;
}

// FUNÇÕES PRINCIPAIS
function inicializarEventos() {
    const secaoSelecionada = buscarSecaoSelecionada();
    renderizarInformacoesSecao(secaoSelecionada);
}

function buscarSecaoSelecionada() {
    const todasAsSecoes = recuperarDados("secoes");
    const idSecaoSelecionada = recuperarDados("estados");

    return todasAsSecoes.find(secao => secao.idSecao === idSecaoSelecionada.secaoIdTemp);
}

// INICIALIZAÇÃO
inicializarEventos();