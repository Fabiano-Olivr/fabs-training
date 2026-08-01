# Montar Métricas

## Objetivo

Calcular o Total de Vendas, Média das Vendas e os vendedores que Venderam Acima da Média.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
                     (----------------------------------------)
                     |  montarMetricas(vendedores, callback)  |
                     (---------------+------------------------)
                                     |
                                     |
            +------------------------v-------------------------------------+
            |  const totalVendas = vendedores.reduce((acc, vendedor) => {  |
            |      return acc += vendedor.vendas;                          |
            |  ), 0);                                                      |
            |  const media = totalVendas / vendedores.length;              |
            +-------------------------+------------------------------------+
                                      |
                                      |
    +---------------------------------v---------------------------------------------+
    |  const acimaDaMedia = vendedores.filter(vendedor => vendedor.vendas > media)  |
    |  .reduce((acc, vendedor) => {--+                                              |
    |      return acc += vendedor.nome + " - ";                                     |
    |  }, "");                                                                      |
    +----------------------------------+--------------------------------------------+
                                       |
                                       |
                                       |
                    +------------------v----------------------------+
                    |  callback(totalVendas, media, acimaDaMedia);  |
                    +------------------+----------------------------+
                                       |
                                 (-----v-------)
                                 |  fimFuncao  |
                                 (-------------)
</pre>