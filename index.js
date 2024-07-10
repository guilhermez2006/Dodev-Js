<<<<<<< HEAD
// Declarando variaveis 
const temFome = prompt("Você está com fome? (Sim/Não)")
const temDinheiro = prompt("Você tem dinheiro? (Sim/Não)")
const  restauranteAberto = prompt("O restaurante está aberto? (Sim/Não)")

//If, else.

if (temFome === "não" || temDinheiro == "não") {
    console.log("Hoje a janta será em casa");
} else if (temDinheiro === "Sim" && restauranteAberto === "Sim") {
    console.log("Hoje a janta sera no seu restaurante preferido!");
} else {
    console.log("Peça um delivery!");
}
=======
//Declarando variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Entrada de dados
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso:"))

//Ano de nascimento do usuario
let anoDeNasc = 0
anoDeNasc = 2023 - idade

//imc do usario
let imc = 0
imc = peso / (altura * altura)
imc = imc.toFixed(2)

//Saida de dados
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoDeNasc +
             ", tem " + altura + " de altura, pesa " + peso + " Kg, seu IMC é " + imc + " Kg/m2 ")

>>>>>>> 913a4f827ad55d853931e8b0dc7dd272b33f3f5a
