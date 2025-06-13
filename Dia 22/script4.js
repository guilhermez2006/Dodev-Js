// 1
const arrayExemplo = [1, 2, 3, 4, 5, 12, 22];

// 2
const resultado = arrayExemplo.map(x => x * 2).filter(x => x > 10);
console.log(resultado);

// 3
const nomesDesafio = ["maria", "carlos", "zé"];
const nomesBons = nomesDesafio.map(n => n[0].toUpperCase() + n.slice(1));
console.log(nomesBons);