// 1
const letras = ["a", "b", "c"];
const maiusculas = letras.map(l => l.toUpperCase());
console.log(maiusculas);

// 2
let numeros = [2, 12, 7, 25, 8];
let numerosMdez = numeros.filter(num => num > 10);
console.log(numerosMdez);

// 3
const nomes = ["ana", "joão", "bia"];
const nomesFormatados = nomes.map(n => n[0].toUpperCase() + n.slice(1));
console.log(nomesFormatados);