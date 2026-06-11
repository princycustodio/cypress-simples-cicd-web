import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que estou logado no sistema', () => {
  cy.login('teste2024@teste.com.br', 'teste');
});

Given('que estou na página de produtos', () => {

  cy.visit('/');

  cy.get('body', { timeout: 20000 })
    .should('be.visible');

  cy.contains('Products', { timeout: 20000 })
    .should('exist')
    .should('be.visible')
    .click();

});

Then('devo visualizar a mensagem {string}', (mensagem) => {
  cy.contains(mensagem, { timeout: 15000 })
    .should('be.visible');
});