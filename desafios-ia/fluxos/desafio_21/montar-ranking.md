# Montar Ranking

## Objetivo

Montar um vetor com os três vendedores que mais venderam.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
               (---------------------------------------)
               |  montarRanking(vendedores, callback)  |
               (---------------------------------------)
                               |
                               |
                               |
         +---------------------v------------------------------+
         |  const vendedoresDecrescente = vendedores.slice()  |
         |  .sort((a, b) => a.vendas - b.vendas)              |
         |  .reverse();                                       |
         |  let qtdRanking = vendedoresDecrescente.length;    |
         +----------------------+-----------------------------+
                                |
                                |
                                |
                                |
                                v
                            /       \                       +-------------------+
                        /  qtdRanking   \       SIM         |  qtdRanking = 3;  |
                   <      .length >= 3       >-------------->-------------------+
                        \       ?       /                           |
                            \       /                               |
                                \    NÃO                            |
                                |                                   |
                                |                                   |
                                |                                   |
                                <-----------------------------------+
                                |
                                |
                                |
                                |
                                |
    +---------------------------v----------------------------------------+
    |  const ranking3 = vendedoresDecrescente.slice(0, qtdRanking - 1);  |
    +----------------------------+---------------------------------------+
                                 |
                        +--------v--------------+
                        |  callback(ranking3);  |
                        +---------+-------------+
                                  |
                                  |
                                  |
                             (----v----)
                             |   fim   |
                             (---------)
</pre>