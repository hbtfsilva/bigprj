const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3')) // Pegando o indice.

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // Vai de um indice ao outro.

console.log('Escola'.concat(escola).concat("!")) // Concatenação
console.log('Escola' + escola + "!") // O "+" concatena.
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) // Substituir = **/\w/g** tudo pela letra "e".

console.log('Ana,Maria,Pedro'.split(',')) // Converter String para uma Arrai. "Regex"



