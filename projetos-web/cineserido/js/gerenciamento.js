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
const formulario_cadastro_secao = document.querySelector("#form-cadastro-sessao");
const outInOptionsFilme = document.querySelector("#select-filme-secao");
const inNumSalaSecao = document.querySelector("#numero-sala-secao");
const inDataSecao = document.querySelector("#data-sessao");
const inHorarioSessao = document.querySelector("#horario-sessao");
const inCapacidadeSalaSecao = document.querySelector("#capacidade-sala-secao");
const inPrecoIngressoSecao = document.querySelector("#preco-ingresso-secao");


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
                <td><button class="botao-perigo" id="${filme.id.replace("filme-", "btn-")}" title="Remover do Catalogo">🗑</button></td>
            `;

            outTabelaRemocao.appendChild(linhaFilme);
        });
    } else {
        outTabelaRemocao.innerHTML = `
            <p>Não há filmes em Catálogo</p>
        `;
    }

}

function renderizarOptionsFilmes(catalogo) {
    outInOptionsFilme.innerHTML = `
        <option value="" selected disabled>Selecione...</option>
    `;

    if (catalogo) {
        catalogo.forEach(filme => {
            const optionFilme = document.createElement("option");
            optionFilme.value = filme.id;
            optionFilme.text = filme.nome;
            outInOptionsFilme.appendChild(optionFilme)
        });
    }
}

function atualizarUI(filmes) {
    renderizarTabelaRemocao(filmes);
    renderizarOptionsFilmes(filmes);
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

    const dados = recuperarDados("filmes");
    atualizarUI(dados);
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
    atualizarUI(recuperarDados("filmes"));

    formulario_cadastro_filme.reset();
}

function removerFilmeCatalogo(idFilme) {
    const id = idFilme.replace("btn-", "filme-");
    removerDados("filmes", id);
    atualizarUI(recuperarDados("filmes"));
}

function adicionarNovaSecao() {
    const idFilmeSelecionado = outInOptionsFilme.value;
    const dataNovaSecao = inDataSecao.value;
    const horaNovaSecao = inHorarioSessao.value;
    const salaNovaSecao = inNumSalaSecao.value;
    const capacidadeSala = inCapacidadeSalaSecao.value;
    const precoIngressoSecao = inPrecoIngressoSecao.value;
    
    const filmeNovaSecao = recuperarDados("filmes").find(filme => filme.id === idFilmeSelecionado);
    const inicioNovaSecao = new Date(`${dataNovaSecao}T${horaNovaSecao}:00-03:00`);

    if (inicioNovaSecao < new Date()) {
        alert("Não é possível agendar uma seção no Passado. Rever a data e Hora!");
        inDataSecao.value = "";
        inHorarioSessao.value = "";
        inDataSecao.focus();
        return;
    }

    const novaSecao = {
        idSecao: "secao-" + crypto.randomUUID().slice(0, 4),
        filme: filmeNovaSecao,
        sala: salaNovaSecao,
        data: dataNovaSecao,
        horario: horaNovaSecao,
        capacidadeSala: capacidadeSala,
        precoIngresso: precoIngressoSecao
    };

    const secoesCadastradas = recuperarDados("secoes");
    if (secoesCadastradas) {
        const salaOcupada = secoesCadastradas.some(secao => {
            if (novaSecao.sala === secao.sala) {
                const inicioSecaoCadastrada = new Date(`${secao.data}T${secao.horario}:00-03:00`);
                const fimSecaoCadastrada = new Date(inicioSecaoCadastrada.getTime());
                fimSecaoCadastrada.setMinutes(fimSecaoCadastrada.getMinutes() + Number(secao.filme.duracao));
                
                if (inicioNovaSecao >= inicioSecaoCadastrada && inicioNovaSecao <= fimSecaoCadastrada) {
                    return true;
                } else if (inicioNovaSecao < inicioSecaoCadastrada) {
                    const fimNovaSecao = new Date(inicioNovaSecao.getTime());
                    fimNovaSecao.setMinutes(fimNovaSecao.getMinutes() + Number(novaSecao.filme.duracao));
                    return fimNovaSecao >= inicioSecaoCadastrada;
                }
            }
        });

        if (salaOcupada) {
            alert(`A sala ${salaNovaSecao} já está reservada nesse horário! Selecione outra sala ou outro horário.`);
            return;
        } else {
            salvarDados("secoes", novaSecao);
        }
    } else {
        salvarDados("secoes", novaSecao);
    }
    formulario_cadastro_secao.reset();
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
});

formulario_cadastro_secao.addEventListener("submit", function (e) {
    e.preventDefault();
    adicionarNovaSecao();
});