import CadastroProdutoPage from '../pages/cadastroPage'
import { gerarProduto } from '../support/utils'

describe('Cadastro de Produtos', () => {

  beforeEach(() => {

    CadastroProdutoPage.acessarSite()

  })

  it('Deve cadastrar um produto com sucesso', () => {

    const produto = gerarProduto()

    const preco = '4500'
    const descricao = 'Notebook RTX 4060'

    CadastroProdutoPage.clicarAdicionarProduto()

    CadastroProdutoPage.preencherNome(produto)

    CadastroProdutoPage.preencherPreco(preco)

    CadastroProdutoPage.preencherDescricao(descricao)

    CadastroProdutoPage.clicarSalvar()

    // Validação final
    cy.contains(produto).should('be.visible')
    cy.contains(preco).should('be.visible')
    cy.contains(descricao).should('be.visible')

  })

  it('Deve editar um produto com sucesso', () => {

    const produtoOriginal = gerarProduto()

    const precoOriginal = '150'
    const descricaoOriginal = 'Mouse RGB'

    CadastroProdutoPage.clicarAdicionarProduto()

    CadastroProdutoPage.preencherNome(produtoOriginal)

    CadastroProdutoPage.preencherPreco(precoOriginal)

    CadastroProdutoPage.preencherDescricao(descricaoOriginal)

    CadastroProdutoPage.clicarSalvar()

    // Editar produto
    CadastroProdutoPage.clicarEditar(produtoOriginal)

    const novoProduto = 'PRO' + produtoOriginal
    const novoPreco = '250'
    const novaDescricao = 'Mouse RGB PRO'

    cy.get(CadastroProdutoPage.elements.nomeInput)
      .clear()
      .type(novoProduto)

    cy.get(CadastroProdutoPage.elements.precoInput)
      .clear()
      .type(novoPreco)

    cy.get(CadastroProdutoPage.elements.descricaoInput)
      .clear()
      .type(novaDescricao)

    CadastroProdutoPage.clicarSalvar()

    // Validação final
    cy.contains(novoProduto).should('be.visible')
    cy.contains(novoPreco).should('be.visible')
    cy.contains(novaDescricao).should('be.visible')

  })

  it('Deve excluir um produto com sucesso', () => {

    const produto = 'Teclado Mecânico'
    const preco = '300'
    const descricao = 'Switch Blue'

    CadastroProdutoPage.clicarAdicionarProduto()

    CadastroProdutoPage.preencherNome(produto)

    CadastroProdutoPage.preencherPreco(preco)

    CadastroProdutoPage.preencherDescricao(descricao)

    CadastroProdutoPage.clicarSalvar()

    // Validar cadastro
    cy.contains(produto).should('be.visible')

    // Excluir produto
    CadastroProdutoPage.clicarExcluir(produto)

    // Validação final
    cy.contains(produto).should('not.exist')
    cy.contains(preco).should('not.exist')
    cy.contains(descricao).should('not.exist')

  })

})