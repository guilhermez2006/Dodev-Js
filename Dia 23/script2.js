// 3.
const precos = [10, 25.5, 8, 99.99];
let precosReais = precos.map(n => n.toFixed(2) + "R$");
console.log("3.", precosReais);

// 4.
const produtos2 = [
  { nome: "Camiseta", preco: 30, estoque: 10 },
  { nome: "Calça", preco: 80, estoque: 5 },
  { nome: "Tenis", preco: 200, estoque: 2 }
];
const produtosComAumento = produtos2.map(produto => ({
  nome: produto.nome,
  precoFinal: (produto.preco * 1.10)
}));
console.log("4.", produtosComAumento);