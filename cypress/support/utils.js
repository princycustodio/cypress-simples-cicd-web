export function gerarProduto() {

    const letras = 'abcdefghijklmnopqrstuvwxyz'
    let texto = ''

    for (let i = 0; i < 5; i++) {

        texto += letras.charAt(
            Math.floor(Math.random() * letras.length)
        )
    }

    return `produto${texto}`
}