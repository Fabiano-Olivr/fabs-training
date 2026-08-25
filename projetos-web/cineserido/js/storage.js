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
export function salvarDados(chave, dadosParaSalvar) {
    let dadosStorage = converterDownload(localStorage.getItem(chave)) || [];
    dadosStorage.push(dadosParaSalvar);

    localStorage.setItem(chave, converterParaUpload(dadosStorage));
}

export function reescreverDados(chave, dadosParaRescrever) {
    localStorage.setItem(chave, converterParaUpload(dadosParaRescrever));
}

export function salvarEstados(nomeDoEstado, estado) {
    let estadosNoStorage = converterDownload(localStorage.getItem("estados")) || {};
    estadosNoStorage[nomeDoEstado] = estado;

    localStorage.setItem("estados", converterParaUpload(estadosNoStorage));
}

export function recuperarDados(chave) {
    return converterDownload(localStorage.getItem(chave));
}

export function removerDados(chave, idDado) {
    const dados = converterDownload(localStorage.getItem(chave));
    if (dados) {
        const index = dados.findIndex(dado => dado.id === idDado);
        dados.splice(index, 1);
    }
    if (dados.length === 0) {
        localStorage.removeItem(chave);
    } else {
        localStorage.setItem(chave, converterParaUpload(dados));
    }
}