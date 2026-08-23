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
const formularioReserva = document.querySelector("#form-reserva");
const inNomeCliente = document.querySelector("#nome-cliente");
const outTextoSelecionados = document.querySelector("#texto-assentos");
const outValorTotal = document.querySelector("#texto-valor-total");
const outMapaAssentos = document.querySelector("#mapa-assentos");

// FUNÇÕES AUXILIÁRES
function verificarNomeCliente(nome) {
    const regEx = /^[a-zA-z]{3,} [a-zA-Z]{2,}/i;
    return regEx.test(nome);
}

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

function reservarIngressos() {
    const informacoesSecao = buscarSecaoSelecionada();
    const nomeCliente = inNomeCliente.value.trim();

    if (!verificarNomeCliente(nomeCliente)) {
        alert("Informe um Nome Completo!");
        inNomeCliente.focus();
        return;
    }

    // retorna uma NodeList contendo todos os botões de assentos selecionados
    const nodeAssentosSelecionados = document.querySelectorAll("#mapa-assentos .assento.selecionado");
    const assentosSelecionados = [...nodeAssentosSelecionados]; // converte a nodeList para vetor
    const qtdAssentosSelecionado = assentosSelecionados.length;

    if (qtdAssentosSelecionado < 1) {
        console.log("Selecione, pelo menos, um assento!");
        return;
    }

    const textoAssentosSelecionados = assentosSelecionados.map(assento => assento.innerText).join(", ");
    const valorTotal = qtdAssentosSelecionado * Number(informacoesSecao.precoIngresso);
    
    /* Modificar o storage para adicionar a funcionalidade de acessar um objeto e modificar um atributo dele */
}

// EVENTOS
formularioReserva.addEventListener("submit", function (e) {
    e.preventDefault();
    reservarIngressos();
});

// INICIALIZAÇÃO
inicializarEventos();