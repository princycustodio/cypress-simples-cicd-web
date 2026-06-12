Feature: API Trello

Scenario: Validar action do Trello (positivo)
  Given que tenho acesso à API do Trello
  Then devo validar a API do Trello com sucesso

Scenario: Validar action do Trello (negativo)
  Given que tenho acesso à API do Trello
  Then devo validar erro na API do Trello