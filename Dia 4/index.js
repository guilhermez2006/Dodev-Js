let temFome = prompt("Está com fome? (Sim/Não)")
let temdinheiro = prompt("Tem dinheiro? (Sim/Não)")
let restauranteAberto = prompt("O Restaurante está aberto? (Sim/Não)")

if ( temFome === "Não" || temdinheiro === "Não") {
    console.log("Hoje a janta será em casa!")
}
if (temFome === "Sim" && temdinheiro === "Sim" && restauranteAberto === "Não") {
    console.log("Peça um delivery!")
}
if( temFome === "Sim" && temdinheiro === "Sim" && restauranteAberto === "Sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!")
}