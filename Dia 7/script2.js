// Jogo de adivinhação

let numero = 50
let palpite = 0

while (palpite !== numero) {
    // Solicita o palpite do jogador até acertar
    palpite = parseInt(prompt("Tente adivinhar o número entre 1 e 50:"));

    if (palpite === numero) {
        console.log("Parabéns, o número é 50!")
    }
    else if (palpite > 50) {
        console.log("O número é menor que " + palpite)
    }
    else if (palpite < numero) {
        console.log("O número é maior que " + palpite)
    }
}