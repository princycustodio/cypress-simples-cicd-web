class LoginPage {

  acessarPaginaLogin() {
    cy.visit('https://www.automationexercise.com/login');
  }

  validarPaginaLogin() {
    cy.url().should(
      'eq',
      'https://www.automationexercise.com/login'
    );

    cy.contains('Login to your account')
      .should('be.visible');
  }

  preencherEmail(email) {
    cy.get('[data-qa="login-email"]')
      .type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-qa="login-password"]')
      .type(senha);
  }

  clicarLogin() {
    cy.get('[data-qa="login-button"]')
      .click();
  }

  validarUsuarioLogado(usuario) {
    cy.get('li')
      .should('contain.text', `Logged in as ${usuario}`);
  }

  validarMensagemErro(mensagem) {
  cy.contains(mensagem)
    .should('be.visible');
}

}

export default new LoginPage();