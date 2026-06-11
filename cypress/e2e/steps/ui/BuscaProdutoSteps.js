import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BuscaProdutoPage from "../../pages/BuscaProdutoPage";


When('pesquiso pelo produto {string}', (produto) => {
  BuscaProdutoPage.pesquisarProduto(produto);
});

When('clico no botão de busca', () => {
  BuscaProdutoPage.clicarBuscar();
});

Then('devo visualizar o produto {string}', (produto) => {
  BuscaProdutoPage.validarProdutoEncontrado(produto);
});

Then('nenhum produto deve ser exibido', () => {
  BuscaProdutoPage.validarNenhumProdutoEncontrado();
});