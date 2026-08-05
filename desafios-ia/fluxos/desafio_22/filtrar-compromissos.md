# Função filtrarCompromissos

## Objetivo

Criar um novo vetor `compromissosFiltrados`, contendo apenas os vetores que passar em uma condição,  
a depeder do `periodoTemporal`.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
    (----------------------------------------------------------------)
    |  filtrarCompromissos(periodoTemporal, compromissos, callBack); |
    (--------------------------+-------------------------------------)
                               |
                               |
                +--------------v----------------------+
                |  const compromissosFiltrados = [];  |
                |      const hoje = new Date();       |
                +--------------+----------------------+
                               |
                               |
                               v                                                          /
                            /     \                                                    /     \
                        periodoTemporal                                            periodoTemporal                                               +-------------------------------------------------------+
                      /       ===       \      NÃO                               /       ===       \        NÃO                                  |  compromissosFiltrados = compromissos.filter(comp =>  |
                   <        "todos"         >--------------------------------->       "passado"        >----------------------------------------->      comp.date >= hoje                                |
                      \        ?        /                                        \        ?        /                                             |  )                                                    |
                         \           /                                              \           /                                                |  .slice(0,1);                                         |
                            \     /                                                    \     /                                                   +----------------------+--------------------------------+
                               \                                                          \                                                                             |
                               |   SIM                                                      |                                                                           |
                               |                                                            |  SIM                                                                      |
                               |                                                            |                                                                           |
                               |                                                            |                                                                           |
                               |                                                            |                                                                           |
         +---------------------v---------------------------+         +----------------------v--------------------------------+                                          |
         |  compromissosFiltrados = compromissos.slice();  |         |  compromissosFiltrados = compromissos.filter(comp =>  |                                          |
         +---------------------+---------------------------+         |      comp.date < hoje                                 |                                          |
                               |                                     |  );                                                   |                                          |
                               |                                     +----------------------+--------------------------------+                                          |
                               |                                                            |                                                                           |
                               |                                                            |                                                                           |
                               |                                                            <---------------------------------------------------------------------------+
                               |                                                            |
         +---------------------v-------------------------------+                            |
         |  callBack(compromissosFiltrados, periodoTemporal);  <----------------------------+
         +-----------------------------------------------------+
                              |
                              |
                              |
                              |
                              |
                         (----v--------)
                         |  fimFuncao  |
                         (-------------)
</pre>