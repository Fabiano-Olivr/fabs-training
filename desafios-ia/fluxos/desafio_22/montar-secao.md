# Início do Site

## Objetivo

Retornar uma função que cria os cards de uma seção definida e atualiza ela.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
    (------------------------------------)
    |  montarSecao(compromissos, secao)  |
    (------------------+-----------------)
                       |
                       |
                       |
      +----------------v-----------------------+
      |  compromissos.forEach(compromisso) {   |
      |      // montar um cartão para cada     |
      |      compromisso, e adiciona a secao.  |
      |  }                                     |
      +----------------+-----------------------+
                       |
                       |
                       |
                       |
                  (----v--------)
                  |  fimFuncao  |
                  (-------------)
</pre>