# Início do Site

## Objetivo

Criar um sistema para validar cadastros. E, ao final, informar quantos cadastros são válidos, quantos possuem erro, o motivo da rejeição de cada cadastro inválido.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
                      (----------)
                      |  inicio  |
                      (-----+----)
                            |
                            |
    +-----------------------v----------------------------------+
    |  const cadastros = gerarCadastros(numAleatorio);         |
    |  const cadsInvalidos = filtrarCadastros(cadastros);      |
    |  gerarRelatorio(cadastros, cadsInvalidos, atualizarUI);  |
    +----------------------+-----------------------------------+
                           |
                           |
                        (--v----)
                        |  fim  |
                        (-------)
</pre>