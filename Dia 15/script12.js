let arrayNum = [0, 1, 0, 3, 12];

function organizarZeros(num) {
  let arrayFiltrado = [];

  for (let i = 0; i < arrayNum.length; i++) {
       arrayNum.sort((a, b) => b - a);
    if (num[i] == 0) {
   

      arrayFiltrado.push(arrayNum);
    }
  }
  return arrayFiltrado;
}

let resultado = organizarZeros(arrayNum);
console.log(resultado);