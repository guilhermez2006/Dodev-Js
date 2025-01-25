// let passaporteValido = false
// let vistoValido = false

// passaporteValido = prompt("Você tem um passaporte válido? (Sim/Não)")
// vistoValido = prompt("Você tem um visto valido? (Sim/Não)")

// if (passaporteValido === ("Sim") && vistoValido === ("Sim")) {
//     passaporteValido = true
//     vistoValido = true
//     console.log("Aprovado para viajar")
// }
// else if (passaporteValido === ("Sim") && vistoValido === ("Não")){
//     passaporteValido = true
//     console.log("Visto necessário para viajar")
// }
// else if (passaporteValido === ("Não") && vistoValido === ("Sim")) {
//     vistoValido = true
//     console.log("Passaporte necessário para viajar")
// }
// else if (passaporteValido === ("Não") && vistoValido === ("Não")) {
//     console.log("Você não tem um passaporte, e não tem um visto valido!")
// }
// else {
//     console.log("Erro no sistema! Digite novamente.")
// }

// Não precisava de valores booleanos, aqui é uma versão melhorada//

let passaporteValido = prompt("Você tem um passaporte válido? (Sim/Não)");
let vistoValido = prompt("Você tem um visto válido? (Sim/Não)");

if (passaporteValido === "Sim" && vistoValido === "Sim") {
    console.log("Aprovado para viajar");
} else if (passaporteValido === "Sim" && vistoValido === "Não") {
    console.log("Visto necessário para viajar");
} else if (passaporteValido === "Não" && vistoValido === "Sim") {
    console.log("Passaporte necessário para viajar");
} else if (passaporteValido === "Não" && vistoValido === "Não") {
    console.log("Você não tem um passaporte e não tem um visto válido!");
} else {
    console.log("Erro no sistema! Digite novamente.");
}
