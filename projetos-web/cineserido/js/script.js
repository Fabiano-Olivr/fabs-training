/**
 * esse script é responsável por todo o sistema.
 * 
 * autor: Fabiano O.
 */

// REFERÊNCIAS AOS ELEMENTOS HTML
const formulario_cadastro_filme = document.querySelector("#form-cadastro-filme");
const inNomeFilmeCadastro = document.querySelector("#nome-filme-cadastro");
const inDuracaoFilmeCadastro = document.querySelector("#duracao-filme-cadastro");
const inGenerosFilmeCadastro = document.getElementsByName("genero-cadastro"); // retorna todos os elementos que possuem 'name="genero"'
const inClassificacaoFilme = document.querySelector("#classificacao-filme-cadastro");
const inBannerFilmeCadastro = document.querySelector("#banner-filme-cadastro");
const outGenerosFilmeCadastro = document.querySelector("#generos-filme-cadastro");

// VARIÁVEIS DE ESTADOS E CONSTANTES
const BILHETERIA = {
    filmes: [],
    secoes: [],
}

// INICIALIZAÇÃO
inicializarEventos();

// FUNÇÕES AUXILIÁRES 
function renderizarGeneros() {
    const generos = ["Ação", "Animação", "Aventura", "Comédia", "Documentário", "Drama",
        "Fantasia", "Faroeste", "Ficção Científica", "Romance", "Suspense", "Terror"];

    generos.forEach(genero => {
        const novoGenero = document.createElement("label");
        novoGenero.innerHTML = `
            <input type="checkbox" name="genero-cadastro" value="${genero}">
            <span>${genero}</span>
        `;
        outGenerosFilmeCadastro.appendChild(novoGenero);
    });
}

function criarFilme(nomeFilme, duracaoFilme, generosFilme, classificacaoFilme, bannerFilme) {
    if (nomeFilme === "" || !isNaN(nomeFilme)) {
        alert("Informe um Nome Válido!");
        inNomeFilmeCadastro.value = "";
        inNomeFilmeCadastro.focus();
        return;
    }
    if (generosFilme.length === 0) {
        alert("Selecione, pelo menos, um gênero");
        return;
    }

    return {
        id: "filme-" + crypto.randomUUID().slice(0, 8),
        nome: nomeFilme,
        duracao: duracaoFilme,
        generos: generosFilme,
        classificacao: classificacaoFilme,
        banner: bannerFilme
    }
}

// FUNÇÕES PRINCIPAIS
function inicializarEventos() {
    renderizarGeneros();
}

function adicionarNovoFilme() {
    const nome = inNomeFilmeCadastro.value.trim();
    const duracao = inDuracaoFilmeCadastro.value;
    const generos = [...inGenerosFilmeCadastro.values()].filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const classificacao = inClassificacaoFilme.value;
    const banner = inBannerFilmeCadastro.files[0];

    const filme = criarFilme(nome, duracao, generos, classificacao, banner);
    if (!filme) {
        return;
    }
    BILHETERIA.filmes.push(filme);
    
    formulario_cadastro_filme.reset();
}

// EVENTOS
formulario_cadastro_filme.addEventListener("submit", function (e) {
    e.preventDefault();
    adicionarNovoFilme();
});