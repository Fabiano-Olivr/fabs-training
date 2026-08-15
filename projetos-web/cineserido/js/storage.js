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
    let dadosStorage = converterDownload(localStorage.getItem(chave));
    if (dadosStorage) {
        dadosStorage.push(dadosParaSalvar);
    } else {
        dadosStorage = [dadosParaSalvar];
    }

    localStorage.setItem(chave, converterParaUpload(dadosStorage));
}

export function recuperarDados(chave) {
    return converterDownload(localStorage.getItem(chave));
}

export function removerDados(chave, idDado) {
    const dados = converterDownload(localStorage.getItem("filmes"));
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