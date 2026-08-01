# Início do Site

## Objetivo

Criar um vetor de objetos para receber os nomes dos vendedores cadastrados e, posteriormente, as vendas deles. Além disso, montar o Ranking com os 3 que mais venderam, calcular o total de vendas, calcular a média de vendas, exibir todos os vendedores cuja venda ficou acima da média.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
                                                                    (--------------)
                                                                    |    inicio    |
                                                                    (--------------)
                                                                            |
                                                                            |
                                                                            |
                                                                            |
                                                                 +----------v-------------------+
                                                                 |  const baseVendedores = [];  |
                                                                 +-----------+------------------+
                                                                             |
                                                                            *|
                                                     +-----------------------+----------------------+
                                                     |                                              |
                                                     |                                              |
                                                     |                                              |
                                                    /v                                             /v
                                                 /     \                                        /     \
                                             /btn cadastrar\                                 /btn vender \
                                         <       clicado        >                         <     clicado     >
                                            \       ?       /                                \     ?     /
                                               \         /                                     \       /
                                                  \   /                                          \   /
                                                    \                                              \
                                                     |    SIM                                       |
              +-------------------------------------->                                              |
              |                                      |                                              |
              |                                      |                                              |
              |                                 /----v------/                                   /---v--------/
              |                                /   nome    /                                   / qtdVendas<-/----------------------------------+
              |                               /-----------/                                   /-----+------/                                   |
              |                                      |                                              |                                          |
              |                                      |                                              |                                          |
              |                                      |                                              |                                          |
              |                                      |                                              |                                          |
      /-------+-----------/                          |                                              v                                          |
     / "informe um nove  /                          /v                                           /     \                                       |
     / completo válido"  /                      /       \                                     qtdVendas > 0      NÃO                /----------+---------------/
    /---------^---------/                  /   nome === ""   \                             <        ?        >-------------------->/ "Nº de Vendas Inválido"  /
              |                       SIM           ||             >                          \           /                       /--------------------------/
              +------------------------   \    !isNaN(nome)   /                                  \     /
                                             \      ?      /                                        \
                                                 \     /                                            |
                                                    \                                               |
                                                     |                                              |
                                                     |   NÃO                                        |
                                                     |                                  +-----------v------------------+
                                                     |                                  |  adicionarVendas(qtdVendas,  |
                                +--------------------v-----------------+                |          updateUI);          |
                                |  cadastrarVendedor(nome, updateUI);  |                +-----------+------------------+
                                +--------------------------------------+                            |
                                                    |                                               |
                                                    |                                               |
                                                    |                                               |
                                                    |                                               |
                                                    |                                               |
                                                    |                                               |
                                                    |                                               |
                                                    |                                               |
                                                    |                                               |
                                                    |                                               |
                                                    |                                               |
                                                    |                                         (-----v------)
                                                    +----------------------------------------->    fim     |
                                                                                              (------------)
</pre>