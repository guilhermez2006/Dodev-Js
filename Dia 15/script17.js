function fibonacci(n) {
  let num1 = 0;
  let num2 = 1;

  for (let i = 0; i < n; i++) {
    let proximo = num1 + num2;
    num1 = num2
    num2 = proximo;
  }

  return num1;
}

let resultado = fibonacci(10);
console.log(resultado); // 55
