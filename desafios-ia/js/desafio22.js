/**
 * esse script é responsável por todas as partes do sistema.
 * 
 * autor: Fabiano O.
 */

// REFERÊNCIA AOS ELEMENTOS HTML
const todosCompromissos = document.querySelector("#todosCompromissos");
const passadosCompromissos = document.querySelector("#passadosCompromissos");
const proxCompromisso = document.querySelector("#proxCompromisso");

// VARIÁVES E ESTADOS
const ESTADOS_SISTEMA = {
    listaCompromissos: []
}

// INICIALIZAÇÃO
iniciarEventos();

// FUNÇÕES AUXILIÁRES
function criarCompromissos() {
    const hoje = new Date();
    const compromissosGerados = [
        {
            descricao: "Reunião com Sócios Minoritários",
            date: new Date(`2026-08-${(hoje.getDate() + 1).toString().padStart(2, "0")}T09:30:00-03:00`)
        },
        {
            descricao: "Reunião para Pitch",
            date: new Date(`2026-08-03T15:30:00-03:00`)
        },
        {
            descricao: "Apresentação da Holding",
            date: new Date(`2026-08-03T17:00:00-03:00`)
        },
        {
            descricao: "Análise de rotina do Repositório",
            date: new Date(`2026-08-${(hoje.getDate() + 3).toString().padStart(2, "0")}T08:30:00-03:00`)
        },
        {
            descricao: "Apresentação da Holding",
            date: new Date(`2026-07-${(hoje.getDate() + 4).toString().padStart(2, "0")}T15:30:00-03:00`)
        }
    ];
    return compromissosGerados;
}

function montarSecao(compromissos, secao) {
    secao.innerHTML = "";

    compromissos.forEach(compromisso => {
        const cartaoCompromisso = document.createElement("div");
        cartaoCompromisso.classList.add("cartao");
        cartaoCompromisso.innerHTML = `
                <p><strong>Compromisso:</strong> ${compromisso.descricao}</p>
                <p><strong>Data:</strong> ${compromisso.date.toLocaleDateString("pt-BR")} 
                    <strong>Horário: </strong> ${compromisso.date.toLocaleTimeString("pt-BR")}</p>
            `;
        secao.appendChild(cartaoCompromisso);
    });
}

// FUNÇÕES PRINCIPAIS
function iniciarEventos() {
    ESTADOS_SISTEMA.listaCompromissos = criarCompromissos();
    filtrarCompromissos("todos", ESTADOS_SISTEMA.listaCompromissos, atualizarUI);
    filtrarCompromissos("passado", ESTADOS_SISTEMA.listaCompromissos, atualizarUI);
    filtrarCompromissos("prox", ESTADOS_SISTEMA.listaCompromissos, atualizarUI);
}

function filtrarCompromissos(periodoTemporal, compromissos, callback) {
    let compromissosFiltrados = [];
    const hoje = new Date();

    if (periodoTemporal === "todos") {
        compromissosFiltrados = compromissos.slice();
    } else if (periodoTemporal === "passado") {
        compromissosFiltrados = compromissos.filter(comp => comp.date < hoje);
    } else {
        compromissosFiltrados = compromissos.filter(comp => comp.date >= hoje)
            .sort((a, b) => a.date - b.date)
            .slice(0, 1);
    }
    callback(compromissosFiltrados, periodoTemporal);
}

function atualizarUI(compromissos, periodoTemporal) {
    if (periodoTemporal === "todos") {
        montarSecao(compromissos, todosCompromissos)();
    } else if (periodoTemporal === "passado") {
        montarSecao(compromissos, passadosCompromissos)();
    } else {
        montarSecao(compromissos, proxCompromisso)();
    }
}