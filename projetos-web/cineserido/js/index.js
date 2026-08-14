/**
 * esse script é responsável pela manipulação dos filmes na página home.
 * 
 * autor: Fabiano O.
*/

// IMPORTS DE MÓDULOS E DEPENDÊNCIAS
import { recuperarDados } from "./storage.js"; 

// REFERÊNCIA AOS ELEMENTOS HTML
const conteinerFilmes = document.querySelector("#conteiner-filmes");

// FUNÇÕES PRINCIPAIS
function atualizarCatalogo() {
    const listaFilmes = recuperarDados("filmes");

    conteinerFilmes.innerHTML = "";

    if (listaFilmes) {
        listaFilmes.forEach(filme => {
            const novoFilme = document.createElement("article");
            novoFilme.className = "card-filme";

            novoFilme.innerHTML = `
                <img src="${filme.urlBanner}" alt="Pôster do ${filme.nome}" class="imagem-poster">
                <div class="conteudo-card">
                    <h3>${filme.nome}</h3>
                    <p class="genero">${filme.generos.join(" / ")} • ${filme.duracao} min</p>
                    <p class="classificacao">Classificação: ${filme.classificacao} anos</p>
                    <a href="pages/sessoes.html" class="botao-primario">Ver Sessões</a>
                </div>
        `;
            conteinerFilmes.appendChild(novoFilme);
        });
    } else {
        conteinerFilmes.innerHTML = `
            <p>Não há filmes em Catálogo</p>
        `;
    }
}

// INICIALIZAÇÃO
atualizarCatalogo();