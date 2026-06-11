import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CarrinhoPage from "../../pages/CarrinhoPage";


Given('que o produto {string} está no carrinho', (produto) => {
  CarrinhoPage.adicionarProdutoAoCarrinho(produto);
});

When('adiciono o produto {string} ao carrinho', (produto) => {
  CarrinhoPage.adicionarProdutoAoCarrinho(produto);
});

When('acesso o carrinho', () => {
  CarrinhoPage.acessarCarrinho();
});

When('removo o produto {string} do carrinho', (produto) => {
  CarrinhoPage.removerProdutoDoCarrinho(produto);
});

Then('devo visualizar o produto {string} no carrinho', (produto) => {
  CarrinhoPage.validarProdutoNoCarrinho(produto);
});

Then('o produto {string} não deve estar no carrinho', (produto) => {
  CarrinhoPage.validarProdutoNaoExisteNoCarrinho(produto);
});