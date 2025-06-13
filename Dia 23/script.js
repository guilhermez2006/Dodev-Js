// 1.
const numeros = [2, 5, 7, 10];
const dobro = numeros.map(n => n * 2);
console.log("1.", dobro);

// 2.
const produtos = [
  { nome: "arroz", preco: 20 },
  { nome: "feijão", preco: 12 },
  { nome: "macarrão", preco: 8 }
];
let nomeM = produtos.map(n => n.nome);
console.log("2.", nomeM);