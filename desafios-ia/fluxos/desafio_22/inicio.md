# Início do Site

## Objetivo

Cria um vetor de objetos contendo descricao e data (utilizando Date) e exibir Quantos compromissos  
já passaram, quantos ainda irão acontecer e qual será o próximo compromisso.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
                       (----------)
                       |  inicio  |
                       (-----+----)
                             |
                             |
                             |
           +-----------------v---------------------------+
           |  const compromissos = criarCompromissos();  |
           +-----------------+---------------------------+
                             |
                             |
    +------------------------v------------------------------------+
    |   listarCompromissos("todos", compromissos, atualizarUI);   |
    |  listarCompromissos("passado", compromissos, atualizarUI);  |
    |   listarCompromissos("prox", compromissos, atualizarUI);    |
    +------------------------+------------------------------------+
                             |
                        (----v----)
                        |   fim   |
                        (---------)
</pre>