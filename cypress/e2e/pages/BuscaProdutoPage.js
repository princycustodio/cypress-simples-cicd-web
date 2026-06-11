class ProdutoPage {

  acessarPaginaLogin() {
    cy.visit('https://www.automationexercise.com/login');
  }

  realizarLogin(email, senha) {
    cy.get('[data-qa="login-email"]').type(email);

    cy.get('[data-qa="login-password"]').type(senha);

    cy.get('[data-qa="login-button"]').click();
  }

  acessarPaginaProdutos() {
    cy.contains('Products').click();
  }

  pesquisarProduto(produto) {
    cy.get('#search_product')
      .clear()
      .type(produto);
  }

  clicarBuscar() {
    cy.get('#submit_search').click();
  }

  validarProdutoEncontrado(produto) {
    cy.contains(produto).should('be.visible');
  }

 validarNenhumProdutoEncontrado() {
  cy.get('.product-image-wrapper')
    .should('have.length', 0);
}
}

export default new ProdutoPage();