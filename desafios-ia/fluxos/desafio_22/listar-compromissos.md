# Função listarCompromissos

## Objetivo

Criar um novo vetor `compromissosFiltrados`, contendo apenas os vetores que passar em uma condição,  
a depeder do `periodoTemporal`.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
    (----------------------------------------------------------------)
    |  listarCompromissos(periodoTemporal, compromissos, callBack);  |
    (--------------------------+-------------------------------------)
                               |
                               |
                +--------------v----------------------+
                |  const compromissosFiltrados = [];  |
                +--------------+----------------------+
                               |
                               |
                               v                                                          /                                                                            /
                            /     \                                                    /     \                                                                      /     \
                        periodoTemporal                                            periodoTemporal                                                              periodoTemporal                                          +-------------------------------------------------------+
                      /       ===       \      NÃO                               /       ===       \        NÃO                                             /         ===         \        NÃO                           |  compromissosFiltrados = compromissos.filter(comp =>  |
                   <       "passado"        >--------------------------------->        "futuro"        >------------------------------------------------>           "todos"            >--------------------------------->      comp.date >= new Date()                          |
                      \        ?        /                                        \        ?        /                                                        \          ?          /                                      |  )                                                    |
                         \           /                                              \           /                                                               \             /                                          |  .slice(0,1);                                         |
                            \     /                                                    \     /                                                                      \     /                                              +----------------------+--------------------------------+
                               \                                                          \                                                                            \                                                                        |
                               |   SIM                                                      |                                                                           |                                                                       |
                               |                                                            |  SIM                                                                      |   SIM                                                                 |
                               |                                                            |                                                                           |                                                                       |
                               |                                                            |                                                                           |                                                                       |
        +----------------------v--------------------------------+                           |                                                       +-------------------v-----------------------------+                                         |
        |  compromissosFiltrados = compromissos.filter(comp =>  |    +----------------------v--------------------------------+                      |  compromissosFiltrados = compromissos.slice();  |                                         |
        |      comp.date < new Date()                           |    |  compromissosFiltrados = compromissos.filter(comp =>  |                      +-------------------------------------------------+                                         |
        |  );                                                   |    |      comp.date >= new Date()                          |                                          |                                                                       |
        +----------------------+--------------------------------+    |  );                                                   |                                          |                                                                       |
                               |                                     +----------------------+--------------------------------+                                          <-----------------------------------------------------------------------+
                               |                                                            |                                                                           |
                               |                                                            |                                                                           |
                               |                                                            <---------------------------------------------------------------------------+
                               |                                                            |
         +---------------------v-------------------------------+                            |
         |  callBack(compromissosFiltrados, periodoTeMporal);  <----------------------------+
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