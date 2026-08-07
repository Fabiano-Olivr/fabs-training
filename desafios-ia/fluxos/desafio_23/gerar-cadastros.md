# Função gerarCadastros

## Objetivo

Gerar um vetor de cadastros aleatórios.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
                       (--------------------------------)
                       |  gerarCadastros(qtdCadastros)  |
                       (------------+-------------------)
                                    |
                                    |
                                    |
            +-----------------------v----------------------------------+
            |  const cadastrosGerados = [];                            |
            |  const nomes = [/* Vetor com nomes aleatórios,           |
            |  incluido "" */];                                        |
            |  const dominios = [/* Vetor contendo dóminios de e-mail  |
            |  invalidos e validos */];                                |
            |  const qtdNomes = nomes.length;                          |
            +-----------------------+----------------------------------+
                                    |
    +------------------------------->
    |                               |
    |                               v
    |                           /  i <  \      NÃO
    |                       <  qtdCadastros  >
    |                          \    ?    / ------------------------------------+
    |                             \   /                                        |
    |                               \                                          |
    |                               |  SIM                                     |
    |                               |                                          |
    |                               |                                          |
    |                               |                                          |
    |         +---------------------v-------------------------------+          |
    |         |  const indexAleatorio = gerarNum(0, qtdNomes - 1);  |          |
    |         |  const cadastro = {                                 |          |
    |         |      id: crypto.randomUIID().substring(1, 4),       |          |
    |         |      nome: nomes[indexAleatorio],                   |          |
    +---------+      email: emails[indexAleatorio],                 |          |
              |      idade: gerarNum(1, 30);                        |          |
              |  }                                                  |          |
              |  cadastrosGerados.push(cadastro);                   |          |
              +-----------------------------------------------------+          |
                                                                               |
                                                                               |
                                    +------------------------------------------+
                                    |
                                    |
                         +----------v-----------------+
                         |  return cadastrosGerados;  |
                         +----------+-----------------+
                                    |
                                    |
                                    |
                                (---v---------)
                                |  fimFuncao  |
                                (-------------)
</pre>