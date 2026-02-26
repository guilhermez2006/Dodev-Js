let numeros = [13, 20, 7, 3, 10, 22, 24, 100, 4];

function analisarPares(array) {

    let soma = 0;
    let maior = 0;

    for (let i = 0; i < array.length; i++) {

        let num = array[i];

        if (num % 2 === 0) {

            // Atualiza soma
            soma = somarNumeroPar(num, soma);

            // Atualiza maior
            maior = buscarMaiorPar(num, maior);
        }
    }

    return {
        soma: soma,
        maior: maior
    };
}

function somarNumeroPar(num, somaAtual) {
    return somaAtual + num;
}

function buscarMaiorPar(num, maiorAtual) {
    if (num > maiorAtual) {
        return num;
    }
    return maiorAtual;
}

let resultado = analisarPares(numeros);

console.log("Soma dos pares:", resultado.soma);
console.log("Maior par:", resultado.maior);