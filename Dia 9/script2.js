//DESCOBRINDO IMC
let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Magreza")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal")
} else if (imc >= 25 && imc <= 29) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}

//DESCOBRINDO O ANO DE NASCIMENTO
let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("Você nasceu no ano de " + anoNasc)

//EXIBINDO ANOS E IDADES
let anosVivido = anoAtual - anoNasc
let idadeAtual = idade

if (anosVivido == anoNasc && anosVivido == anoAtual) {
    console.log(anosVivido + " anos de idade")
    console.log(idadeAtual + " anos de idade")
}
idadeAtual

//LOOP DO/WHILE
do {
    //INSERIR LÓGICA ANTERIOR
    let continuar = prompt("Deseja inserir os dados novamente? (s/n)")
} while (continuar == "s")