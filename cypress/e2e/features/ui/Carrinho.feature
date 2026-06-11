Feature: Carrinho de Compras

  Background:
    Given que estou logado no sistema
    And que estou na página de produtos

  Scenario: Adicionar produto ao carrinho com sucesso
    When adiciono o produto "Blue Top" ao carrinho
    And acesso o carrinho
    Then devo visualizar o produto "Blue Top" no carrinho

  Scenario: Remover produto do carrinho
    Given que o produto "Blue Top" está no carrinho
    When acesso o carrinho
    And removo o produto "Blue Top" do carrinho
    Then o produto "Blue Top" não deve estar no carrinho