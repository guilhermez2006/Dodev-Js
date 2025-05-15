let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

function encontrarComunsSimples(arr1, arr2) {
  const comuns = [];
  for (let i = 0; i < arr1.length; i++) {
    const numeroA = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const numeroB = arr2[j];
      if (numeroA === numeroB) {
        comuns.push(numeroA);
        break;
      }
    }
  }
  return comuns;
}

const resultadoSimples = encontrarComunsSimples(arrayA, arrayB);
console.log(resultadoSimples);