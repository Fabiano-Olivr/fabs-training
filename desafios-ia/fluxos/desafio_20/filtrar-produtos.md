# Função filtrarProdutos()

## Objetivo

Gerar um novo vetor contendo os produtos que o estoque é <= estoqueMin.

## Fluxo

```text
          (-------------------------)
          |filtrarProdutos(produtos)|
          (-----------+-------------)
                      |
    /-----------------v-----------------------/
   /return produtos.filter(prod => {         /
   / return prod.estoque <= prod.estoqueMin /
  / })                                     /
  /-------------------+-------------------/
                      |
                      |
                 (----v----)
                 |fimFuncao|
                 (---------)
```