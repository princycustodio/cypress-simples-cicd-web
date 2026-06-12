Cypress.Commands.add('login', (email, senha) => {

  cy.session([email, senha], () => {

    cy.visit('/login');

    cy.get('[data-qa="login-email"]')
      .clear()
      .type(email);

    cy.get('[data-qa="login-password"]')
      .clear()
      .type(senha);

    cy.get('[data-qa="login-button"]').click();

    cy.contains('Logged in as');

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