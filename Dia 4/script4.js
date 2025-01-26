let idade
let inscricao = false
let taxaDeInscricao = false
let passeEspecial = false

idade = parseInt(prompt("Qual a sua idade?"))
inscricao = prompt("Você enviou sua inscrição? (Sim/Não)")
taxaDeInscricao = prompt("Você pagou a taxa de inscrição? (Sim/Não)")
passeEspecial = prompt("Você possui um passe especial? (Sim/Não)")

if (idade < 18) {
    console.log("A incrição não foi aceita!")
}
else if (taxaDeInscricao !== "Sim") {
    console.log("Taxa de incrição não paga!")
}
else if (passeEspecial !== "Sim" && taxaDeInscricao === "Sim" && idade >= 18) {
    taxaDeInscricao = true
    console.log("Inscrição normal recebida!")
}

else if (passeEspecial === "Sim" && idade >= 18) {
    passeEspecial = true
    console.log("Inscrição especial recebida!")
}
else {
    console.log("Erro no sistema! Digite novamente.")
}