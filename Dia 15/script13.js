let numeros = [1, 2, 3, 1];
let numerosDuplicados = []; // Dica: coloque isso DENTRO da função se quiser limpar a cada teste

function temDuplicados(num) {
  num.sort();

  // Ajuste: i < num.length - 1 (para o último não tentar olhar o que não existe na frente)
  for (let i = 0; i < num.length - 1; i++) {
    
    let numeroAtual = num[i];
    let proximoNumero = num[i + 1]; // CORREÇÃO AQUI: i + 1 dentro do colchete

    if (numeroAtual == proximoNumero) {
      numerosDuplicados.push(numeroAtual);
    }
  }
  return numerosDuplicados;
}

let resultado = temDuplicados(numeros);
console.log(resultado); // Vai retornar [1]