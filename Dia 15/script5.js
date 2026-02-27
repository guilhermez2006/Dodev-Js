let numeros = [10, 20, 30];

function somar(num, acumulador) {
    let resultado = acumulador + num;
    return resultado;
}

function processarLista(lista) {
    let somaTotal = 0;

    for (let i = 0; i < lista.length; i++) {
        somaTotal = somar(lista[i], somaTotal);
    }

    return somaTotal;
}

let resultadoFinal = processarLista(numeros);

console.log(resultadoFinal);
