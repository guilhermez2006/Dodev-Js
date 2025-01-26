let idade
let conviteValido = false
let areaVip = false

idade = parseInt(prompt("Qual a sua idade?"))
conviteValido = prompt("Você tem um convite válido? (Sim/Não)")
areaVip = prompt("Seu nome está na lista VIP? (Sim/Não)")

if (idade < 18) {
    console.log("Acesso negado! Você é menor de idade.")
}
    if (conviteValido === "Não" && areaVip === "Não" && idade >= 18) {
        console.log("Acesso negado! Você não atende aos requisitos.")
    }
else if (conviteValido === "Sim" && areaVip === "Não" && idade >= 18) {
    conviteValido = true
    console.log("Bem-vindo(a) à área comum!")
}
 else if (areaVip === "Sim" && idade >= 18) {
    areaVip = true
    console.log("Bem-vindo(a) à área VIP!")
 }
 else {
    console.log("Erro no sistema! Tente novamente.")
 }