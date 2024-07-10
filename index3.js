//DECLARANDO VARIÁVEIS
let nome 
let idade 
let carteira = false
let temCarro = false

//PEDINDO INFORMAÇÕES AO USÁRIO
nome = prompt("Qual seu nome?")
idade = parseInt(prompt("Qual sua idade?"))
let opcaoCarta = prompt("Você possui carteira de motorista? (sim/não)")
if (opcaoCarta == "sim") {
    carteira = true
}
let (opcaoCarro == "sim") {
    carteira = true}

//PEDINDO MENSAGEM NO CONSOLE
if (idade < 18 || !carteira ) {
    console.log(nome + ", você não pode dirigir!")
} else if (idade >= 18 && carteira && !temCarro ) {
    console.log(nome + (", você pode dirigir mas não um tem carro!")) 
} else {
    console.log(nome + ", você será o motorista!")
}
    