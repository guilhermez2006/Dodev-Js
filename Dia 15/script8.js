let meusNumeros = [10, 20, 30, 90]


function multiplicarTudo(lista) {
    let total = 1

    for (let i = 0; i < lista.length; i++) {
        total = total * lista[i];
    }
    return total;
}

let resultado = multiplicarTudo(meusNumeros)

console.log(resultado)