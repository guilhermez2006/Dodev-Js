let numeros = [13, 20, 7, 3, 10, 22, 24, 100, 4];
let somaTotalPares = 0;
let maiorNumPar = 0;

function somarNumerosPares(num) {
    if (num % 2 === 0) {
        somaTotalPares += num;
    }
}

function buscarMaiorNumPar(num) {
    if (num % 2 === 0) {
        if (num > maiorNumPar) {
            maiorNumPar = num;
        }
    }
}

for (let i = 0; i < numeros.length; i++) {
    // Envia o número atual da lista para dentro das funções processarem
    somarNumerosPares(numeros[i]);
    buscarMaiorNumPar(numeros[i]);
}

console.log("Soma apenas dos números pares no Array: \n" + somaTotalPares);
console.log("Maior número Par encontrado no Array: \n" + maiorNumPar);
