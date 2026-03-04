function maiorSucessor() {
  let nums = [1, 10, 5, 2, 6, 1, 3];
  let arrayfiltrado = [];

  for (let i = 0; i < nums.length; i++) {
    let maiorAtual = 0; 

    for (let j = i + 1; j < nums.length; j++) {
      // Se o número da frente for maior que o meu campeão atual...
      if (nums[j] > maiorAtual) {
        // ...o troféu (maiorAtual) recebe esse NOVO VALOR (nums[j])
        maiorAtual = nums[j]; 
      }
    }
    arrayfiltrado.push(maiorAtual);
  }

  return arrayfiltrado;
}

let resultado = maiorSucessor();
console.log(resultado); 
// Saída: [10, 6, 6, 6, 3, 3, 0]
