

describe('Cadastro de Produtos', () => {

  beforeEach(() => {
    cy.visit('https://patrick-cst.github.io/cadastro-produtos/')
  })

  it('Deve cadastrar um produto com sucesso', () => {

  function gerarProduto() {

    const letras = 'abcdefghijklmnopqrstuvwxyz'
    let texto = ''

    for (let i = 0; i < 5; i++) {

      texto += letras.charAt(
        Math.floor(Math.random() * letras.length)
      )

    }

    return `produto${texto}`

  }

  const produto = gerarProduto()

    const preco = '4500'
    const descricao = 'Notebook RTX 4060'

    cy.get('#addProductBtn').click()

    cy.get('#productName').type(produto)
    cy.get('#productPrice').type(preco)
    cy.get('#productDescription').type(descricao)

    cy.contains('button', 'Salvar').click()

    // Validação final
    cy.contains(produto).should('be.visible')
    cy.contains(preco).should('be.visible')
    cy.contains(descricao).should('be.visible')

  })

  it('Deve editar um produto com sucesso', () => {

    function gerarProduto() {

    const letras = 'abcdefghijklmnopqrstuvwxyz'
    let texto = ''

    for (let i = 0; i < 5; i++) {

      texto += letras.charAt(
        Math.floor(Math.random() * letras.length)
      )

    }

    return `produto${texto}`

  }

  const produtoOriginal = gerarProduto()

    const precoOriginal = '150'
    const descricaoOriginal = 'Mouse RGB'

    cy.get('#addProductBtn').click()

    cy.get('#productName').type(produtoOriginal)
    cy.get('#productPrice').type(precoOriginal)
    cy.get('#productDescription').type(descricaoOriginal)

    cy.contains('button', 'Salvar').click()

    // Editar produto

    cy.contains('h3', produtoOriginal).parent().contains('button', 'Editar').click()

    const novoProduto = 'PRO'+produtoOriginal
    const novoPreco = '250'
    const novaDescricao = 'Mouse RGB PRO'

    cy.get('#productName').clear().type(novoProduto)
    cy.get('#productPrice').clear().type(novoPreco)
    cy.get('#productDescription').clear().type(novaDescricao)

    cy.contains('button', 'Salvar').click()

    // Validação final
    cy.contains(novoProduto).should('be.visible')
    cy.contains(novoPreco).should('be.visible')
    cy.contains(novaDescricao).should('be.visible')

   // cy.contains(produtoOriginal).should('not.exist')

  })

  it('Deve excluir um produto com sucesso', () => {

    const produto = 'Teclado Mecânico'
    const preco = '300'
    const descricao = 'Switch Blue'

    cy.get('#addProductBtn').click()

    cy.get('#productName').type(produto)
    cy.get('#productPrice').type(preco)
    cy.get('#productDescription').type(descricao)

    cy.contains('button', 'Salvar').click()

    // Validar cadastro
    cy.contains(produto).should('be.visible')

    // Excluir produto
    cy.contains('h3', produto).parent().contains('button', 'Excluir').click()


    // Validação final
    cy.contains(produto).should('not.exist')
    cy.contains(preco).should('not.exist')
    cy.contains(descricao).should('not.exist')

  })

})