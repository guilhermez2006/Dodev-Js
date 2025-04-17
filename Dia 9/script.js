let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))
let peso = parseFloat(prompt("Digite seu peso: "))
let altura = parseFloat(prompt("Digite sua altura: "))
let profissao = prompt("Digite sua profissão: ")

alert(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`)

if(idade >= 18){
    alert("Está liberado para tomar umas geladas")
}

else{
    alert("Sem gelada para você")
}

let idadeMeses = idade * 12
let idadeSemanas = idade * 52
let idadeDias = idade * 365

alert(
    "Sua idade em meses é: " + idadeMeses + "\n" +
    "Sua idade em semanas é: " + idadeSemanas + "\n" +
    "Sua idade em dias é: " + idadeDias
);