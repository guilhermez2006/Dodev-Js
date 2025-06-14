// 5
const lista = [1, 2, 3, 4, 5, 6];
let pares = 0;
lista.forEach(function(numero) {
  if (numero % 2 === 0) {
    pares++;
  }
});
console.log("Quantidade de pares:", pares); 

// 6
let valores = [3, -7, 2, -1, 5, -9];
valores.forEach(function(valor, i, array) {
  if (valor < 0) {
    array[i] = 0;
  }
});
console.log(valores);