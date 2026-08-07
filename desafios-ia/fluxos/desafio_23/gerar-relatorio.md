# Função gerarRelatorio

## Objetivo

Analisar o cadastros validos e inválidos e retornar, a quantodade de cadastros válidos e inválidos e uma lista dos erros;

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
      (-------------------------------------------------------)
      |  gerarRelatorios(cadastros, cadsInvalidos, callback)  |
      (-----------------------+-------------------------------)
                              |
                              |
                              |
    +-------------------------v-----------------------------+
    |  const qtdIvalidos = cadsInvalidos.length;            |
    |  const qtdValidos = cadastros.length - qtdInvalidos;  |
    |  const motivosErros = cadsInvalidos.map(cad =>        |
    |      `Cadastro ${cad.id}:\n$(cad.erros)`              |
    |  ).join();                                            |
    +------------------------+------------------------------+
                             |
                             |
       +---------------------v-------------------------------+
       |  callback(qtdInvalidos, qtdValidos, motivosErros);  |
       +--------------------+--------------------------------+
                            |
                            |
                       (----v--------)
                       |  fimFuncao  |
                       (-------------)
</pre>