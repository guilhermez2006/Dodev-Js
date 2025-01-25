let numero = parseInt(prompt("Digite um número:"))

if(!isNaN(numero) && numero > 0) {
for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
} else {
    console.log("Erro! Digite novamente")
}