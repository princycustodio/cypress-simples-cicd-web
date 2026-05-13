class CadastroProdutoPage {

    elements = {

        botaoAdicionarProduto: '#addProductBtn',

        nomeInput: '#productName',

        precoInput: '#productPrice',

        descricaoInput: '#productDescription',

        botaoSalvar: 'button',
//
        cardProduto: 'h3'
    }

    acessarSite() {
        cy.visit('/')
    }

    preencherNome(nome) {
        cy.get(this.elements.nomeInput)
            .type(nome)
    }

    preencherPreco(preco) {
        cy.get(this.elements.precoInput)
            .type(preco)
    }

    preencherDescricao(descricao) {
        cy.get(this.elements.descricaoInput)
            .type(descricao)
    }

    clicarAdicionarProduto() {
        cy.get(this.elements.botaoAdicionarProduto)
            .click()
    }

    clicarSalvar() {
        cy.contains(this.elements.botaoSalvar, 'Salvar')
            .click()
    }

    clicarEditar(produto) {

        cy.contains(this.elements.cardProduto, produto)
            .parent()
            .contains('button', 'Editar')
            .click()
    }

    clicarExcluir(produto) {

        cy.contains(this.elements.cardProduto, produto)
            .parent()
            .contains('button', 'Excluir')
            .click()
    }
}

export default new CadastroProdutoPage()