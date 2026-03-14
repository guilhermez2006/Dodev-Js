function ehPalindromo(num) {
  let numString = num.toString();
  let numInvertido = num.toString().split("").reverse().join("");

  return numString === numInvertido;
}

let resultado = ehPalindromo(535);
console.log(resultado);