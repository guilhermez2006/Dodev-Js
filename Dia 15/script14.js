let arrNums = [5, 4, 7, 9, 5];

function verificarRepeticaoNums(listaNums) {
    for (let i = 0; i < listaNums.length; i++) {
        for (let j = i + 1; j < listaNums.length; j++) {
            if (listaNums[i] == listaNums[j]) {
                return true; // duplicata encontrada, encerra imediatamente
            }
        }
    }
    return false; // early return: só alcançado após checar todos os pares sem duplicatas
}

let resultado = verificarRepeticaoNums(arrNums)
console.log(resultado)