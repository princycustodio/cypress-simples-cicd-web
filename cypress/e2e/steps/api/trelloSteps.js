import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

//
// SETUP
//
Given('que tenho acesso à API do Trello', () => {
  cy.log('Acessando a API do Trello');
});

//
//  CENÁRIO POSITIVO
//
Then('devo validar a API do Trello com sucesso', () => {

  cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
  }).then((response) => {

    expect(response.status).to.eq(200);

    const listName = response.body.data.list.name;

    cy.log('List name:', listName);

    expect(listName).to.exist;
    expect(listName).to.be.a('string');

  });

});

//
// CENÁRIO NEGATIVO
//
Then('devo validar erro na API do Trello', () => {

  cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/actions/INVALID_ID',
    failOnStatusCode: false
  }).then((response) => {

    expect(response.status).to.be.oneOf([400, 404]);

    cy.log('Erro recebido:', response.body);

  });

});