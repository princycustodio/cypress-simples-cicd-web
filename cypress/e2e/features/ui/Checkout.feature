Feature: Fluxo de Compra

  Background:
    Given que estou logado no sistema
    And que estou na página de produtos

  Scenario: Compra com sucesso
    When adiciono o produto "Blue Top" ao carrinho
    And acesso o carrinho
    And prossigo para o checkout
    And realizo o pagamento corretamente
    Then devo visualizar a mensagem "Congratulations! Your order has been confirmed!"

  Scenario: Validacao progressiva de campos obrigatorios
    When adiciono o produto "Blue Top" ao carrinho
    And acesso o carrinho
    And prossigo para o checkout
    Then nao deve permitir finalizar pagamento sem dados