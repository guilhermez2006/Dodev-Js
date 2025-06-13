// 1
let triplo = num => num * 3;
console.log(triplo(100));

// 2
let primeiraLetra = palavra => palavra[0];
console.log(primeiraLetra("Amor"));

// 3
let saudacaoExtra = nome => `Bem vindo(a) ${nome}!`;
console.log(saudacaoExtra("Guilherme"));

// 4
const somar = [3, 5, 1].reduce((acc, n) => acc + n, 0);
console.log(somar);