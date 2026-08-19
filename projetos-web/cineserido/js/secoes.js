/**
 * esse script é responsável pela exibição e busca das seções cadastradas.
 * 
 * autor: Fabiano O.
 */

// IMPORTS DE MÓDULOS E DEPENDÊNCIAS
import { recuperarDados } from "./storage.js";

// REFERÊNCIAS AOS ELEMENTOS HTML
const formularioFiltroSecoes = document.querySelector("formulario-filtro-secoes");
const inNomeFilme = document.querySelector("#filtro-filme");
const inDataSecao = document.querySelector("filtro-data");
const inOutSelectSala = document.querySelector("#filtro-sala");
const inComVagas = document.querySelector("#filtro-disponivel");
const conteinerSessoes = document.querySelector("#conteiner-sessoes");

// FUNÇÕES AUXILIÁRES


// FUNÇÕES PRINCIPAIS
function inicializarEventos() {
    const secoes = recuperarDados("secoes");
    renderizarSecoes(secoes);
}

function renderizarSecoes(listaSecoes) {
    conteinerSessoes.innerHTML = "";

    if (listaSecoes.length === 0) {
        conteinerSessoes.innerHTML = `
            <p>Nenhuma Seção encontrada</p>
        `;
    } else {
        listaSecoes.forEach(secao => {
            const cartaoSecao = document.createElement("article");
            cartaoSecao.className = "card-sessao";

            cartaoSecao.innerHTML = `
                <h3>${secao.filme.nome}</h3>
                <p><strong>Sala:</strong> ${secao.sala.padStart(2, "0")}</p>
                <p><strong>Data:</strong> ${secao.data}</p>
                <p><strong>Horário:</strong> ${secao.horario}</p>
                <p><strong>Vagas:</strong> 25/50</p>
                <a href="reserva.html" class="botao-sucesso">Reservar Assento</a>
            `;

            conteinerSessoes.appendChild(cartaoSecao);
        });
    }
}

// EVENTOS

// INICIALIZAÇÃO
inicializarEventos();