// Armazenando uma funcao em uma variavel
const imprimirSomna = function(a, b){
    console.log(a + b)

}

imprimirSomna(2,3)

// Armazenando uma funcao arrow em uma variavel
// A seta (=>) substitui a (funcao)
const soma  = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimirSomna('Legal!!!')
