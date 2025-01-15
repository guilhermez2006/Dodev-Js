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