let valor // não inicializada

console.log(valor)

valor = null // "null" ausêmcia de valor
console.log(valor)
// console.log(valor.toString()) // Error!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)





