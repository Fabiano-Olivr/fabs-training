// REFERENCIA OS ELEMENTOS HTML
const outEstoque = document.getElementById("outEstoque");
const outQtdRepo = document.getElementById("outQtdRepo");
const outReposicao = document.getElementById("outReposicao");
const outPorcentagem = document.getElementById("outPorcentagem");

// INICIALIZAÇÃO
iniciar();

// UTILITÁRIOS
function gerarNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarNomeProduto() {
    const nomesFicticios = ["Arroz Integral", "Leite UHT", "Macarrão Espaguete", "Feijão Carioca",
        "Óleo de Soja", "Açúcar Refinado", "Café Torrado", "Sabão em Pó", "Detergente Líquido",
        "Papel Higiênico"];
    return nomesFicticios[gerarNum(0, nomesFicticios.length - 1)];
}

// FUNÇÕES EXULIÁRES
function atualizarHTML(txtProdutos, txtFiltro, qtdRepo, porcentagemFiltro) {
    outEstoque.innerText = txtProdutos
    outReposicao.innerText = "Carregando...";

    setTimeout(() => {
        outQtdRepo.innerText = `qtd. de Produtos P/Repor: ${qtdRepo} (${porcentagemFiltro} % do Total)`;
        outReposicao.innerText = txtFiltro;
    }, 3000);
}

// FUNÇÕES PRINCIPAIS
function iniciar() {
    const produtos = gerarProdutos();
    const produtosFiltrados = filtrarProdutos(produtos);
    
    processarEstoque(produtos, produtosFiltrados, atualizarHTML);
}

function gerarProdutos() {
    const produtos = [];
    const qtdProdutos = gerarNum(8,15);

    for (let i = 0; i < qtdProdutos; i++) {
        const produtoGerado = {
            id: crypto.randomUUID().substring(0, 4),
            nome: gerarNomeProduto(),
            estoqueMin: gerarNum(1, 5),
            estoque: gerarNum(0, 20)
        }
        produtos.push(produtoGerado);
    }
    return produtos;
}

function filtrarProdutos(produtos) {
    return produtos.filter(prod => {
        return prod.estoque <= prod.estoqueMin;
    });
}

function processarEstoque(produtos, produtosFiltrados, callback) {
    const produtosEstoque = produtos.reduce((acc, prod) => {
        return acc + `${prod.nome} (${prod.estoque} und)\n`;
    }, "");

    const produtosParaRepor = produtosFiltrados.reduce((acc, prod) => {
        return acc + `${prod.nome} (${prod.estoque} und)\n`;
    }, "");

    const qtdRepo = produtosFiltrados.length;
    const porcentagem = ((qtdRepo / produtos.length) * 100).toFixed(2);

    callback(produtosEstoque, produtosParaRepor, qtdRepo, porcentagem);
}