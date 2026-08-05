# Função atualizarUI

## Objetivo

Denir qual seção deve ser atualizada e executar a função, montada de acordo com a seção  
a ser atualizada

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
    (----------------------------------------------)
    |  atualizarUI(compromissos, periodoTemporal)  |
    |                                              |
    (--------------------+-------------------------)
                         |
                         |
                         |
                        /v                                                   /
                     //    \                                              /     \
                 periodoTemporal                                       /           \
               /      \===       \        NÃO                       / periodoTemporal \      NÃO                +-----------------------------------------------+
            <        "todos"         >--------------------------->          ===          >---------------------->  montarSecao(compromissos, proxCompromisso);  |
               \        ?        /                                  \    "passado"    /                         +---------------------+-------------------------+
                  \           /                                       \      ?      /                                                 |
                     \     /                                             \       /                                                    |
                        \                                                  \   /                                                      |
                         |                                                   \                                                        |
                         |    SIM                                            |                                                        |
                         |                                                   |   SIM                                                  |
                         |                                                   |                                                        |
                         |                             +---------------------v------------------------------+                         |
    +--------------------v----------------------------+|  montarSecao(compromissos, passadosCompromissos);  |                         |
    |  montarSecao(compromissos, todosCompromissos);  |+---------------------+------------------------------+                         |
    +--------------------+----------------------------+                      |                                                        |
                         |                                                   |                                                        |
                         |                                                   |                                                        |
                         |                                                   |                                                        |
                         |                                                   <--------------------------------------------------------+
                         <---------------------------------------------------+
                         |
                         |
                         |
                         |
                    (----v--------)
                    |  fimFuncao  |
                    (-------------)
</pre>