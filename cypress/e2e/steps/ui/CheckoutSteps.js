import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from "../../pages/CheckoutPage";


When('prossigo para o checkout', () => {
  CheckoutPage.irParaCheckout();
});

When('realizo o pagamento corretamente', () => {
  CheckoutPage.realizarPagamentoCompleto();
});

Then('nao deve permitir finalizar pagamento sem dados', () => {

  cy.contains('Place Order').click();

  cy.url().should('include', 'payment');

  cy.get('#submit')
    .should('be.visible');

  cy.contains('Congratulations')
    .should('not.exist');

});