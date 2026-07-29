# Função gerarProdutos()

## Objetivo

Criar um vetor de objetos contendo pelo menos 8 produtos. Cada produto possuindo nome, estoque e estoqueMinimo.

## Fluxo

```text
                             (-------------)
                             |gerarProdutos|
                             (-------+-----)
                                     |
                                     |
                      +--------------v-------------------+
                      | const produtos = [];             |
                      | const qtdProds = gerarNum(8, 15) |
                      +--------------+-------------------+
                                     |
                                     |
                                     v
                                /       \
                           < i < qtdProds  >  NÃO
  |-------------------->       \    ?    /   ------------------------------+
  |                               \   /                                    |
  |                                  |                                     |
  |                                  | SIM                                 |
  |                                  |                                     |
  |                                  |                                     |
  |                      +-----------v-------------+                       |
  |                      | const produtoGerado = { |                       |
  |                      | id,                     |               +-------v-------+
  |                      | nome,                   |               |return produtos|
  |                      | estoqueMin,             |               +---------------+
  |                      | estoque                 |
  |                      | }                       |
  |                      +-----------+-------------+
  |                                  |
  |                                  |
  |                                  |
  |                    +-------------v---------------+
  +--------------------|produtos.push(produto gerado)|
                       +-----------------------------+
```