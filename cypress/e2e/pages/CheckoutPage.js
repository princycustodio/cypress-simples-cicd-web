class CheckoutPage {

  adicionarProdutoAoCarrinho(produto) {
    cy.contains(produto)
      .parents('.product-image-wrapper')
      .trigger('mouseover');

    cy.contains('Add to cart')
      .click();

    cy.contains('Continue Shopping')
      .click();
  }

  acessarCarrinho() {
    cy.contains('Cart').click();
  }

  irParaCheckout() {
    cy.contains('Proceed To Checkout').click();
  }

  irParaPagamento() {
    cy.contains('Place Order').click();
  }

  realizarPagamentoCompleto() {
    this.irParaPagamento();

    cy.get('[name="name_on_card"]').type('QA Tester');
    cy.get('[name="card_number"]').type('4111111111111111');
    cy.get('[name="cvc"]').type('123');
    cy.get('[name="expiry_month"]').type('12');
    cy.get('[name="expiry_year"]').type('2026');

    cy.contains('Pay and Confirm Order').click();
  }

  tentarPagamento() {
    cy.contains('Pay and Confirm Order').click();
  }

  validarNaoAvancou() {
    cy.get('[name="name_on_card"]').should('be.visible');
  }

  preencherSomenteCartao() {
    cy.get('[name="card_number"]').clear().type('4111111111111111');
  }

  preencherNomeECartao() {
    cy.get('[name="name_on_card"]').clear().type('QA Tester');
    cy.get('[name="card_number"]').clear().type('4111111111111111');
  }

  preencherParcial() {
    cy.get('[name="name_on_card"]').clear().type('QA Tester');
    cy.get('[name="card_number"]').clear().type('4111111111111111');
    cy.get('[name="cvc"]').clear().type('123');
  }

  preencherQuaseTudo() {
    cy.get('[name="name_on_card"]').clear().type('QA Tester');
    cy.get('[name="card_number"]').clear().type('4111111111111111');
    cy.get('[name="cvc"]').clear().type('123');
    cy.get('[name="expiry_month"]').clear().type('12');
  }
}

export default new CheckoutPage();