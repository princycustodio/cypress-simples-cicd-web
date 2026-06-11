import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que estou na página de login', () => {
  cy.visit('https://www.automationexercise.com/login');
});

When('informo o email {string}', (email) => {
  cy.get('[data-qa="login-email"]').type(email);
});

When('informo a senha {string}', (senha) => {
  cy.get('[data-qa="login-password"]').type(senha);
});

When('clico no botão Login', () => {
  cy.get('[data-qa="login-button"]').click();
});

Then('devo visualizar a mensagem de erro {string}', (mensagem) => {
  LoginPage.validarMensagemErro(mensagem);
});