# Sincronizar Base com o HTML

## Objetivo

Atualizar a saída no HTML com os dados da base;

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
       (-----------------------------------------)
       |  updateUI(vendedores = baseVendedores)  |
       (----------------+------------------------)
                        |
                        |
                        |
                        |
                        |
                        v
                    /       \
                venedores.length\
           <          !== 0          >
                \       ?       /
                    \       /
                        \
                        |
                        |
                        |
                        |
    +-------------------v------------------------------+
    |           adicionarSelect(vendedores);           |
    |   montarRanking(vendedores, atualizarRanking);   |
    |  montarMetricas(vendedores, atualizarMetricas);  |
    +--------------------+-----------------------------+
                         |
                         |
                         |
                    (----v--)
                    |  fim  |
                    (-------)
</pre>