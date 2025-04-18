const array = [];
const indices = [];
let contadorIndice = 0;

const numeroProcurado = parseInt(prompt("Digite o número a ser procurado:"));

for (let i = 0; i < 10; i++) { // Supomos que o array tem até 10 elementos
  const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`));
  array[i] = elemento;
}

for (let i = 0; i < 10; i++) { // Supomos que o array tem até 10 elementos
  if (array[i] === numeroProcurado) {
    indices[contadorIndice] = i;
    contadorIndice++;
  }
}

console.log(`O número ${numeroProcurado} foi encontrado nos índices: ${indices}`);