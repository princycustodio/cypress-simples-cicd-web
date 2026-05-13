import cadastroProdutoPage from '../pages/CadastroPage'
import { gerarProduto } from '../support/utils'

describe('Cadastro de Produtos', () => {

  beforeEach(() => {

    cadastroProdutoPage.acessarSite()

  })

  it('Deve cadastrar um produto com sucesso', () => {

    const produto = gerarProduto()

    const preco = '4500'
    const descricao = 'Notebook RTX 4060'

    cadastroProdutoPage.clicarAdicionarProduto()

    cadastroProdutoPage.preencherNome(produto)

    cadastroProdutoPage.preencherPreco(preco)

    cadastroProdutoPage.preencherDescricao(descricao)

    cadastroProdutoPage.clicarSalvar()

    // Validação final
    cy.contains(produto).should('be.visible')
    cy.contains(preco).should('be.visible')
    cy.contains(descricao).should('be.visible')

  })

  it('Deve editar um produto com sucesso', () => {

    const produtoOriginal = gerarProduto()

    const precoOriginal = '150'
    const descricaoOriginal = 'Mouse RGB'

    cadastroProdutoPage.clicarAdicionarProduto()

    cadastroProdutoPage.preencherNome(produtoOriginal)

    cadastroProdutoPage.preencherPreco(precoOriginal)

    cadastroProdutoPage.preencherDescricao(descricaoOriginal)

    cadastroProdutoPage.clicarSalvar()

    // Editar produto

    cadastroProdutoPage.clicarEditar(produtoOriginal)

    const novoProduto = 'PRO' + produtoOriginal
    const novoPreco = '250'
    const novaDescricao = 'Mouse RGB PRO'

    cy.get(cadastroProdutoPage.elements.nomeInput)
      .clear()
      .type(novoProduto)

    cy.get(cadastroProdutoPage.elements.precoInput)
      .clear()
      .type(novoPreco)

    cy.get(cadastroProdutoPage.elements.descricaoInput)
      .clear()
      .type(novaDescricao)

    cadastroProdutoPage.clicarSalvar()

    // Validação final
    cy.contains(novoProduto).should('be.visible')
    cy.contains(novoPreco).should('be.visible')
    cy.contains(novaDescricao).should('be.visible')

  })

  it('Deve excluir um produto com sucesso', () => {

    const produto = 'Teclado Mecânico'
    const preco = '300'
    const descricao = 'Switch Blue'

    cadastroProdutoPage.clicarAdicionarProduto()

    cadastroProdutoPage.preencherNome(produto)

    cadastroProdutoPage.preencherPreco(preco)

    cadastroProdutoPage.preencherDescricao(descricao)

    cadastroProdutoPage.clicarSalvar()

    // Validar cadastro
    cy.contains(produto).should('be.visible')

    // Excluir produto
    cadastroProdutoPage.clicarExcluir(produto)

    // Validação final
    cy.contains(produto).should('not.exist')
    cy.contains(preco).should('not.exist')
    cy.contains(descricao).should('not.exist')

  })

})