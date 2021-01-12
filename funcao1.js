// "Função" é um trecho de código (bloco de código nomeado)
// Recebe paramentros de entrada e no final retorna um valor.
// Pode não receber nenhum parametro, não retornar dado... pode ser feito varias combinações.

// Função sem retorno.
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7) // Ela ignorou os dados após o paramentro
imprimirSoma()

// Função com retorno.
function soma(a, b = 1) {
    return  a + b
}

console.log (soma(2, 3))
console.log(soma(2))
console.log(soma())