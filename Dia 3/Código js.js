//Declarando variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Entrada de dados
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))

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
