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
export function salvarDados(dados) {
    let filmes = converterDownload(localStorage.get("filmes"));
    if (filmes) {
        filmes.push(converterParaUpload(dados));
    } else {
        filmes = [converterParaUpload(dados)];
    }
}

export function recuperarDados(chave) {
    return converterDownload(localStorage.getItem(chave));
}