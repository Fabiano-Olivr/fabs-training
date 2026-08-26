/**
 * esse script é responsável pelo processo de reservar ingressos...
 * 
 * autor: Fabiano O.
 */

// IMPORTS DE MÓDULOS E DEPENDÊNCIAS
import { recuperarDados, salvarDados, reescreverDados, removerDados } from "./storage.js";

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

function atualizarInformacoesCompra(assentos, valor) {
    outTextoSelecionados.innerText = assentos;
    outValorTotal.innerText = `R$ ${valor}`;
}

function recuperarIdSecao() {
    return recuperarDados("estados").find(estado => estado.id === "secoes").idSecaoEscolhida;
}

function recuperarSecoes() {
    const todasAsSecoes = recuperarDados("secoes");
    const secaoSelecionada = identificarSecaoSelecionada(todasAsSecoes, recuperarIdSecao());

    return [todasAsSecoes, secaoSelecionada];
}

// FUNÇÕES PRINCIPAIS
function inicializarEventos() {
    const [, secaoSelecionada] = recuperarSecoes();
    renderizarInformacoesSecao(secaoSelecionada);
    renderizarMapaAssentos(secaoSelecionada);
}

function identificarSecaoSelecionada(secoes, idSecaoSelecionada) {
    return secoes.find(secao => secao.idSecao === idSecaoSelecionada);
}

function reservarIngressos() {
    const [todasAsSecoes, secaoSelecionada] = recuperarSecoes();

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
    const valorTotal = qtdAssentosSelecionado * Number(secaoSelecionada.precoIngresso);

    assentosSelecionados.forEach(assento => {
        const ingresso = {
            chave: "ingresso-" + crypto.randomUUID().slice(0, 5),
            cliente: nomeCliente,
            assento: assento.innerText
        };
        secaoSelecionada.ingressosVendidos.push(ingresso);
    });

    reescreverDados("secoes", todasAsSecoes);
    alert("Seus assentos foram reservados. Bom Filme!");

    inNomeCliente.value = "";
}

function renderizarMapaAssentos(secao) {
    const qtdAssentos = secao.capacidadeSala;
    const assentosReservados = secao.ingressosVendidos.map(ingresso => ingresso.assento);
    outMapaAssentos.innerHTML = "";

    const qtdFileiras = Math.ceil(qtdAssentos / 10);
    const qtdAssentosUtilmaFileira = (qtdAssentos % 10);
    for (let i = 0; i < qtdFileiras; i++) {
        const rotuloFileira = String.fromCharCode(i + 65);
        const conteinerFileiraAtual = document.createElement("div");
        conteinerFileiraAtual.className = "fileira-assentos";

        conteinerFileiraAtual.innerHTML = `
            <span class="rotulo-fileira">${rotuloFileira}</span>
        `;

        const isUltima = i === qtdFileiras - 1;
        for (let a = 0; a < 10; a++) {
            const rotuloAssento = rotuloFileira + (a + 1);

            conteinerFileiraAtual.innerHTML += `
                <button class="assento">${rotuloAssento}</button>
            `;

            const isReservado = assentosReservados.includes(rotuloAssento);
            if (isReservado) {
                conteinerFileiraAtual.classList.add("ocupado");
                conteinerFileiraAtual.disabled = true;
            } else {
                conteinerFileiraAtual.classList.add("disponivel");
            }

            if (isUltima && a === qtdAssentosUtilmaFileira -1) {
                break;
            }
        }
        outMapaAssentos.appendChild(conteinerFileiraAtual);
    }
}

// EVENTOS
formularioReserva.addEventListener("submit", function (e) {
    e.preventDefault();
    reservarIngressos();
});

// INICIALIZAÇÃO
inicializarEventos();