/**
 * esse script é responsável por todo o sistema.
 * 
 * autor: Fabiano O.
 */

// REFERÊNCIAS AOS ELEMENTOS HTML
const formulario_cadastro_filme = document.querySelector("#form-cadastro-filme");
const nomeFilme = document.querySelector("#nome-filme");
const duracaoFilme = document.querySelector("#duracao-filme");
const generosFilme = document.getElementsByName("genero"); // retorna todos os elementos que possuem 'name="genero"'
const classificacaoFilme = document.querySelector("#classificacao-filme");
const bannerFilme = document.querySelector("#banner-filme");

// VARIÁVEIS DE ESTADOS E CONSTANTES
const BILHETERIA = {
    filmes: [],
    secoes: []
}

// FUNÇÕES AUXILIÁRES 

// FUNÇÕES PRINCIPAIS
function adicionarNovoFilme() {
    const nome = nomeFilme.value.trim();
    const duracao = duracaoFilme.value;
    const generos = [...generosFilme.values()].filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const classificacao = classificacaoFilme.value;
    const banner = bannerFilme.files[0];

    if (nome === "" || !isNaN(nome)) {
        alert("Informe um Nome Válido!");
        nomeFilme.value = "";
        nomeFilme.focus();
        return;
    }
    if (generos.length === 0) {
        alert("Selecione, pelo menos, um gênero");
        return;
    }

    BILHETERIA.filmes.push({
        nome: nome,
        duracao: duracao,
        generos: generos,
        classificacao: classificacao,
        banner: banner
    });
    formulario_cadastro_filme.reset();
}

// EVENTOS
formulario_cadastro_filme.addEventListener("submit", function (e) {
    event.preventDefault();
    adicionarNovoFilme();
})