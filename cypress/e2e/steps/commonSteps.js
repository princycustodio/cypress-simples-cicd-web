import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que estou logado no sistema', () => {
  cy.login('teste2024@teste.com.br', 'teste');
});

Given('que estou na página de produtos', () => {
  // Navega diretamente para a página de produtos para evitar buscas lentas pelo link
  cy.visit('/products');
});

Then('devo visualizar a mensagem {string}', (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});