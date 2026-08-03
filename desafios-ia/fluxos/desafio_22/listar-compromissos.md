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
                               v
                            /     \
                        periodoTemporal                              +-------------------------------------------------------+
                      /       ===       \      NÃO                   |  compromissosFiltrados = compromissos.filter(comp =>  |
                   <       "passado"        >------------------------>      comp.date >= new Date()                          |
                      \        ?        /                            |  );                                                   |
                         \           /                               +----------------------+--------------------------------+
                            \     /                                                         |
                               \                                                            |
                               |   SIM                                                      |
                               |                                                            |
                               |                                                            |
                               |                                                            |
        +----------------------v--------------------------------+                           |
        |  compromissosFiltrados = compromissos.filter(comp =>  |                           |
        |      comp.date < new Date()                           |                           |
        |  );                                                   |                           |
        +----------------------+--------------------------------+                           |
                               |                                                            |
                               |                                                            |
                               |                                                            |
                               |                                                            |
                               |                                                            |
         +---------------------v-------------------------------+                            |
         |  callBack(compromissosFiltrados, periodoTemporal);  |<---------------------------+
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