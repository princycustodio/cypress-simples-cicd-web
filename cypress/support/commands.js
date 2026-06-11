Cypress.Commands.add('login', (email, senha) => {

  cy.session([email, senha], () => {

    cy.visit('/login');

    cy.get('[data-qa="login-email"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type(email);

    cy.get('[data-qa="login-password"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type(senha);

    cy.get('[data-qa="login-button"]')
      .should('be.visible')
      .click();

    cy.contains('Logged in as', { timeout: 15000 })
      .should('be.visible');

  }, {
    cacheAcrossSpecs: true
  });

  Cypress.Commands.add('getTrelloAction', () => {
  return cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
  });
});

});