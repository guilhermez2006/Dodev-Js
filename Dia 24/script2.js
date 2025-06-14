// 3
const numeros = [10, 20, 30, 40];
let soma = 0;
numeros.forEach(function (num, i) {
    soma += num; 
});
console.log(soma); 

// 4
const nomes = ["Lucas", "Maria", "Ana"];
let frases = [];
nomes.forEach(function(nome) {
  frases.push("Olá, " + nome + "!");
});
console.log(frases);