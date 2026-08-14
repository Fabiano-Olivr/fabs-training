/**
 * esse script é responsável por todo o sistema.
 * 
 * autor: Fabiano O.
 */

// IMPORTS DE MÓDULOS E DEPENDÊNCIAS
import { salvarDados, recuperarDados, removerDados } from "./storage.js";

// REFERÊNCIAS AOS ELEMENTOS HTML
const formulario_cadastro_filme = document.querySelector("#form-cadastro-filme");
const inNomeFilmeCadastro = document.querySelector("#nome-filme-cadastro");
const inDuracaoFilmeCadastro = document.querySelector("#duracao-filme-cadastro");
const inGenerosFilmeCadastro = document.getElementsByName("genero-cadastro"); // retorna todos os elementos que possuem 'name="genero"'
const inClassificacaoFilme = document.querySelector("#classificacao-filme-cadastro");
const inBannerFilmeCadastro = document.querySelector("#banner-filme-cadastro");
const outGenerosFilmeCadastro = document.querySelector("#generos-filme-cadastro");
const outTabelaRemocao = document.querySelector("#tabela-remocao");

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

function renderizarTabelaRemocao(catalogo) {
    outTabelaRemocao.innerHTML = "";

    if (catalogo) {
        catalogo.forEach(filme => {
            const linhaFilme = document.createElement("tr");
            linhaFilme.innerHTML = `
                <td>${filme.nome}</td>
                <td>${filme.duracao} min</td>
                <td>${filme.generos.join(" / ")}</td>
                <td>${filme.classificacao} Anos</td>
                <td><button class="botao-perigo" id="${filme.id.replace("filme-","btn-")}" title="Remover do Catalogo">🗑</button></td>
            `;
    
            outTabelaRemocao.appendChild(linhaFilme);
        });
    } else {
        outTabelaRemocao.innerHTML = `
            <p>Não há filmes em Catálogo</p>
        `;
    }

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
        urlBanner: bannerFilme
    }
}

// FUNÇÕES PRINCIPAIS
function inicializarEventos() {
    renderizarGeneros();
    renderizarTabelaRemocao(recuperarDados("filmes"));
}

function adicionarNovoFilme() {
    const nome = inNomeFilmeCadastro.value.trim();
    const duracao = inDuracaoFilmeCadastro.value;
    const generos = [...inGenerosFilmeCadastro.values()].filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const classificacao = inClassificacaoFilme.value;
    const urlBanner = URL.createObjectURL(inBannerFilmeCadastro.files[0]); // cria uma url temporária para a imagem no vetor  

    const filme = criarFilme(nome, duracao, generos, classificacao, urlBanner);
    if (!filme) {
        return;
    }
    salvarDados("filmes", filme);
    renderizarTabelaRemocao(recuperarDados("filmes"));

    formulario_cadastro_filme.reset();
}

function removerFilmeCatalogo(idFilme) {
    const id = idFilme.replace("btn-", "filme-");
    removerDados("filmes", id);
    renderizarTabelaRemocao(recuperarDados("filmes"));
}

// EVENTOS
formulario_cadastro_filme.addEventListener("submit", function (e) {
    e.preventDefault();
    adicionarNovoFilme();
});

// Ouvinte dos botões da tabela de remover do catálogo
outTabelaRemocao.addEventListener("click", function (e) {
    if (e.target.classList.contains("botao-perigo")) {
        removerFilmeCatalogo(e.target.id);
    }
})