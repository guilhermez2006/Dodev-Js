function lengthUltimaPalavra(s) {
  let ultimaPalavra = [];

  // Remove espaços das pontas e separa cada caractere
  let ajusteS = s.trim().split("");

  // Verifica se há espaços (mais de uma palavra)
  if (ajusteS.includes(" ")) {
    // Separa em palavras
    ajusteS = s.trim().split(" ");
    // Pega a última palavra
    ultimaPalavra.push(ajusteS.pop());

    return ultimaPalavra[0].length;
  }
}

let resultado = lengthUltimaPalavra("      Hello World    ");
console.log(resultado);