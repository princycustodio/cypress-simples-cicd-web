Feature: Busca de Produtos

  Background:
    Given que estou logado no sistema
    And que estou na página de produtos

  Scenario: Buscar produto existente
    When pesquiso pelo produto "Blue Top"
    And clico no botão de busca
    Then devo visualizar o produto "Blue Top"

  Scenario: Buscar produto inexistente
    When pesquiso pelo produto "ProdutoInexistente123"
    And clico no botão de busca
    Then nenhum produto deve ser exibido