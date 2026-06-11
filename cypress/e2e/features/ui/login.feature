Feature: Login de usuário

  Scenario: Realizar login com sucesso
    Given que estou na página de login
    When informo o email "teste2024@teste.com.br"
    And informo a senha "teste"
    And clico no botão Login
    Then devo visualizar a mensagem "Logged in as teste"


    Scenario: login Inválido
    Given que estou na página de login
    When informo o email "teste2021@teste.com.br"
    And informo a senha "teste"
    And clico no botão Login
    Then devo visualizar a mensagem "Your email or password is incorrect!"