// REFERÊNCIAS AOS ELEMENTOS HTML
const formularioVendedores = document.querySelector("#formulario-cadastro-vendedor");
const formularioVendas = document.querySelector("#formulario-vendas");
const btCadastrar = document.querySelector("#btCadastrar");
const btVenda = document.querySelector("#btVenda");
const selectVendedor = document.querySelector("#selectVendedor");
const outRanking = document.getElementById("outRanking");
const outMetricas = document.getElementById("outMetricas");
const inNome = document.querySelector("#inNome");
const inVendas = document.querySelector("#inVendas");

// CONSTANTES E VARIÁVEIS DE ESTADO
const BASE_VENDEDORES = [];

// UTILITÁRIOS
function formatarNome(nome) {
    const posicaoEspaco1 = nome.indexOf(" ");
    return nome.substring(0, posicaoEspaco1 + 2);
}

// FUNÇÕES AUXILIÁRES
function adicionarSelect(vendedores) {
    selectVendedor.innerHTML = `
        <option value="" selected disabled>Selecionar...</option>
    `;
    vendedores.forEach(vendedor => {
        const optVendedor = document.createElement("option");
        optVendedor.value = vendedor.id;
        optVendedor.text = vendedor.nome;

        selectVendedor.appendChild(optVendedor);
    });
}

function atualizarRanking(vendedores) {
    outRanking.innerText = vendedores.reduce((acc, vendedor, i) => {
        return acc + `${(i + 1)}º ${vendedor.nome} (${vendedor.vendas} vendas)\n`;
    }, "");
}

function atualizarMetricas(totalVendas, media, vendedores_acima_media) {
    outMetricas.innerHTML = `
    <p><strong>Total de Vendas:</strong> ${totalVendas}</p>
    <p><strong>Média de Vendas:</strong> ${Math.trunc(media)}</p>
    <p><strong>Vendedores que Venderam mais que a média:</strong></p>
    <pre>${vendedores_acima_media}</pre>
    `;
}

// FUNÇÕES PRICIPAIS
function cadastrarVendedor(nome, callback) {
    const vendedor = {
        id: BASE_VENDEDORES.length + 1,
        nome: nome,
        vendas: 0
    };
    BASE_VENDEDORES.push(vendedor);

    callback(BASE_VENDEDORES);
}

function adicionarVendas(qtdVendas, idVendedor, callback) {
    const vendedor = BASE_VENDEDORES.find(v => v.id === idVendedor);
    vendedor.vendas = qtdVendas;

    callback(BASE_VENDEDORES);
}

function montarRanking(vendedores, callback) {
    const vendedore_vendas_decrescentes = vendedores.slice()
        .sort((a, b) => a.vendas - b.vendas)
        .reverse();
    let qtdRanking = vendedore_vendas_decrescentes.length;

    if (qtdRanking >= 3) {
        qtdRanking = 3;
    }

    const ranking3 = vendedore_vendas_decrescentes.slice(0, qtdRanking)
        .filter(vendedor => vendedor.vendas !== 0);
    callback(ranking3);
}

function montarMetricas(vendedores, callback) {
    const totalVendas = vendedores.reduce((acc, vendedor) => {
        return acc += vendedor.vendas;
    }, 0);
    const media = totalVendas / vendedores.length;

    const vendedores_acima_media = vendedores.filter(vendedor => vendedor.vendas > media)
        .reduce((acc, vendedor) => {
            return acc += `${formatarNome(vendedor.nome)}; `;
        }, "");

    callback(totalVendas, media, vendedores_acima_media);
}

function updateUI(vendedores = BASE_VENDEDORES) {
    if (vendedores.length === 0)
        return;

    adicionarSelect(vendedores);
    const possuiVendas = vendedores.some(vendedor => vendedor.vendas > 0);
    if (possuiVendas) {
        montarRanking(vendedores, atualizarRanking);
        montarMetricas(vendedores, atualizarMetricas);
    }
}

function capturarCadastro() {
    const nome = inNome.value.trim();

    if (nome === "" || !isNaN(nome)) {
        alert("Inform um nome válido...");
        inNome.value = "";
        inNome.focus();
        return
    }
    if (!nome.match(/ /g)) {
        alert("Escreva o Nome Completo do Vendedor...");
        inNome.focus();
        return;
    }

    cadastrarVendedor(nome, updateUI);
}

function capturarVendas() {
    const qtdVendas = Number(inVendas.value);

    if (qtdVendas <= 0 || isNaN(qtdVendas)) {
        alert("Nº de Vendas Inválido");
        inVendas.value = "";
        inVendas.focus();
        return;
    }

    adicionarVendas(qtdVendas, Number(selectVendedor.value), updateUI);
}

// OUVINTES DE EVENTOS
formularioVendedores.addEventListener("submit", function (e) {
    e.preventDefault();

    capturarCadastro();

    formularioVendedores.reset();
});

formularioVendas.addEventListener("submit", function (e) {
    e.preventDefault();

    capturarVendas();

    formularioVendas.reset();
})