# Função gerarInfos()

## Objetivo

Obter informações dos dois vetores recebidos como argumetos e executar uma função com essas informações.

## Fluxo

```text
            (-------------------------------------------------------)
            |processarEstoque(produtos, produtosFiltrados, callback)|
            (------------------+------------------------------------)
                               |
      +------------------------v---------------------------------+
      | const produtosEstoque = produtos.reduce((acc, prod) => { |
      |     return `${prod.nome} (${estoque} und(s))\n`          |
      | },"");                                                   |
      +------------------------+---------------------------------+
                               |
  +----------------------------v----------------------------------------+
  | const produtosParaRepor = produtosFiltrados.reduce((acc, prod) => { |
  |     return `${prod.nome} (${estoque} und(s))\n`;                    |
  | },"");                                                              |
  +----------------------------+----------------------------------------+
                               |
         +---------------------v----------------------------+
         | const qtdRepo = produtosFiltrados.length;        |
         | const porcentagemRepo = qtdRepo / produtos.length|
         +---------------------+----------------------------+
                               |
        +----------------------v-------------------------------+
        |callback(txtProdutos, txtFiltro, qtdRepo, porcentagem)|
        +----------------------+-------------------------------+
                               |
                           (---v-----)
                           |fimFuncao|
                           (---------)
```