# Início do Site

## Objetivo

Criar um vetor de objetos contendo pelo menos 8 produtos. Cada produto possuindo nome, estoque e estoqueMinimo. Depois, exibir quantos produtos precisam de reposição, os nomes desses produtos e a porcentagem de produtos que estão abaixo do estoque mínimo.

## Fluxo

```text
                      (------)
                      |inicio|
                      (---+--)
                          |
   +----------------------v------------------------------+
   | const produtos = gerarProdutos();                   |
   | const produtosFiltrados = filtrarProdutos(produtos) |
   +----------------------+------------------------------+
                          |
                          |
  +-----------------------v-------------------------------------+
  |processarEstoque(produtos, produtosFiltrados, atualizarHTML) |
  +-----------------------+-------------------------------------+
                          |
                      (---v--)
                      | fim  |
                      (------)
```

## Regras de Negócio

* 