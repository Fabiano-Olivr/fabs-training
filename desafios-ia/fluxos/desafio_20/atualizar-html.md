# Função atualizarHtml()

## Objetivo

Exibir as informações no site.

## Fluxo

```text
       (---------------------------------------------------------------------)
       |  atualizarHTML(txtProdutos, txtFiltro, qtdRepo, porcentagem)        |
       (----------------------------+----------------------------------------)
                                    |
                                    |
                        /-----------v--------------------/
                       / /* Na seção de Estoque */      /
                       / outEstoque = txtProdutos;      /
                       / /* Na seção de Reposição */    /
                       / outReposicao = "Carregando";   /
                      /-------------+------------------/
                                    |
                                    |
                              +-----v---------+
                              |  delay de 3s  |
                              +-----+---------+
                                    |
                                    |
      /-----------------------------v----------------------------------------------/
     / /* Na seção de Reposição */                                                /
     / outQtdReposicao = "Qtd. de Produtos P/Repor: " + qtdRepo;                  /
     / outReposicao = txtReposicao;                                               /
     / outPorcentagem = "Porcentagem em Relação ao Total " + porcentagem + " %";  /
    /-------------------------------+--------------------------------------------/
                                    |
                               (----v--------)
                               |  fimFuncao  |
                               (-------------)
```