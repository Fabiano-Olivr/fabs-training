# Cadastro de Novo Vendedor

## Objetivo

Criar um novo objeto para um novo vendedor, contendo *id*, *nome* e *vendas*.

## Fluxo

*! Para melhor Visualização do fluxograma, desabilite a quebra de linha*
<pre style="white-space: pre; overflow-x: auto; font-family: monospace;">
    (-------------------------------------)
    |  cadastrarVendedor(nome, callback)  |
    (--------------+----------------------)
                   |
                   |
      +------------v---------------------+
      |  const vendedor = {              |
      |  id: baseVendedores.length + 1,  |
      |  nome: nome,                     |
      |  vendas: 0                       |
      |  }                               |
      +-------------+--------------------+
                    |
                    |
                    |
      +-------------v--------------------+
      |  baseVendedores.push(vendedor);  |
      |           callback();            |
      +--------------+-------------------+
                     |
                     |
               (-----v----)
               |   fim    |
               (----------)
</pre>

## Regras de Negócios

* Os IDs devem ser em órdem crescente, começando em 1;
* a propriedade vendas de cada vendedor deve começar com 0;