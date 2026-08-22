/**
 * esse script é responsável pela exibição e busca das seções cadastradas.
 * 
 * autor: Fabiano O.
 */

// IMPORTS DE MÓDULOS E DEPENDÊNCIAS
import { recuperarDados, salvarEstados } from "./storage.js";

// REFERÊNCIAS AOS ELEMENTOS HTML
const formularioFiltroSecoes = document.querySelector("#formulario-filtro-secoes");
const inNomeFilme = document.querySelector("#filtro-filme");
const inDataSecao = document.querySelector("#filtro-data");
const inOutSelectSala = document.querySelector("#filtro-sala");
const inComVagas = document.querySelector("#filtro-disponivel");
const conteinerSessoes = document.querySelector("#conteiner-sessoes");

// FUNÇÕES AUXILIÁRES
function renderizarOpcoesDeSalas(listaSecoes) {
    inOutSelectSala.innerHTML = `
        <option value="">Todas as salas</option>
    `;

    const salasCriadas = new Set(); // Usado como lista de controle para não repetir os nºs das salas
    listaSecoes.forEach(secao => {
        if (!salasCriadas.has(secao.sala)) {  // A sala já existe ? Se retornar false:
            const opcaoSala = document.createElement("option");
            opcaoSala.value = secao.sala;
            opcaoSala.text = `Sala ${secao.sala}`;
            inOutSelectSala.appendChild(opcaoSala);

            salasCriadas.add(secao.sala);
        }
    });
}

function buscarNome(nomeBuscado, nome) {
    const regEx = new RegExp(nomeBuscado, "gi");
    return regEx.test(nome);
}

// FUNÇÕES PRINCIPAIS
function inicializarEventos() {
    const secoes = recuperarDados("secoes");
    renderizarSecoes(secoes);
    renderizarOpcoesDeSalas(secoes);
}

function renderizarSecoes(listaSecoes) {
    conteinerSessoes.innerHTML = "";

    if (listaSecoes) {
        listaSecoes.forEach(secao => {
            const cartaoSecao = document.createElement("article");
            cartaoSecao.className = "card-sessao";

            const data = new Date(`${secao.data}T${secao.horario}`).toLocaleDateString();
            cartaoSecao.innerHTML = `
                <h3>${secao.filme.nome}</h3>
                <p><strong>Sala:</strong> ${secao.sala}</p>
                <p><strong>Data:</strong> ${data}</p>
                <p><strong>Horário:</strong> ${secao.horario}</p>
                <p><strong>Vagas:</strong> 25/50</p>
                <a href="reserva.html" class="botao-sucesso" data-secao-id="${secao.idSecao}">Reservar Assento</a>
            `;

            conteinerSessoes.appendChild(cartaoSecao);
        });
    } else {
        conteinerSessoes.innerHTML = `
            <p>Nenhuma seção encontrada</p>
        `;
    }
}

function filtrarSecoes(listaSecoes, callback) {
    const nomeFilme = inNomeFilme.value.trim();
    const dataSecao = inDataSecao.value;
    const numeroDaSala = Number(inOutSelectSala.value);
    const comVagas = inComVagas.checked;

    const secoesEncontradas = [];
    for (const secao of listaSecoes) {
        if (!buscarNome(nomeFilme, secao.filme.nome))
            continue;
        if (dataSecao !== "" && dataSecao !== secao.data)
            continue;
        // if (comVagas)
        // Fazer qtdIngressos - capacidadeSala > 0?
        if (numeroDaSala > 0 && numeroDaSala !== Number(secao.sala))
            continue;

        secoesEncontradas.push(secao);
    }

    callback(secoesEncontradas);
}

// EVENTOS
formularioFiltroSecoes.addEventListener("submit", function (e) {
    e.preventDefault();
    filtrarSecoes(recuperarDados("secoes"), renderizarSecoes);
});

conteinerSessoes.addEventListener("click", function (e) {
    if (e.target.classList.contains("botao-sucesso")) {
        const idSecao = e.target.dataset.secaoId; // obtém o id da seção atribuido ao elemento <a> do botão clicado
        salvarEstados("secaoIdTemp", idSecao);
    }
});

// INICIALIZAÇÃO
inicializarEventos();