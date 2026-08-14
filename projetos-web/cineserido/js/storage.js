/**
 * esse script é responsável pelo salvamento e recuperação dos dados no localStorage
 * 
 * autor: Fabiano O.
 */

// FUNÇÕES AUXILIÁRES
function converterDownload(retorno) {
    return retorno ? JSON.parse(retorno) : false;
}

function converterParaUpload(objeto) {
    return JSON.stringify(objeto);
}

// FUNÇÕES PRINCIPAIS
export function salvarDados(chave, dados) {
    let filmes = converterDownload(localStorage.getItem("filmes"));
    if (filmes) {
        filmes.push(dados);
    } else {
        filmes = [dados];
    }

    localStorage.setItem(chave, converterParaUpload(filmes));
}

export function recuperarDados(chave) {
    return converterDownload(localStorage.getItem(chave));
}