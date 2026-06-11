class CarrinhoPage {

  acessarPaginaLogin() {
    cy.visit('https://www.automationexercise.com/login');
  }

  realizarLogin(email, senha) {
    cy.get('[data-qa="login-email"]')
      .type(email);

    cy.get('[data-qa="login-password"]')
      .type(senha);

    cy.get('[data-qa="login-button"]')
      .click();
  }

  acessarPaginaProdutos() {
    cy.contains('Products')
      .click();
  }

  adicionarProdutoAoCarrinho(produto) {

    cy.contains(produto)
      .parents('.product-image-wrapper')
      .first()
      .trigger('mouseover');

    cy.contains('Add to cart')
      .first()
      .click();

    cy.contains('Continue Shopping')
      .click();
  }

  acessarCarrinho() {
    cy.contains('Cart')
      .click();
  }

  validarProdutoNoCarrinho(produto) {
    cy.contains(produto)
      .should('be.visible');
  }

  removerProdutoDoCarrinho(produto) {

    cy.contains('tr', produto)
      .find('.cart_quantity_delete')
      .click();
  }

  validarProdutoNaoExisteNoCarrinho(produto) {

  cy.contains(produto)
    .should('not.exist');
}
}

export default new CarrinhoPage();