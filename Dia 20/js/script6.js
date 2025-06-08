function verificarFilme(idade, temIngresso, horarioSessao) {
    return new Promise(function (resolve, reject) {
        if (!temIngresso) {
            reject("Você precisa comprar um ingresso!");
        } 
        else if (idade >= 16) {
            resolve("Bom filme! 🍿"); 
        } 
        else if (horarioSessao === "Noturno") {
            reject("Você não pode assistir a sessão noturna menor de 16 anos!");
        } 
        else if (horarioSessao === "Manhã") {
            resolve("Bom filme! (Sessão Infantil)");
        }
    });
}

// Testando
verificarFilme(15, true, "Noturno")
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg)); // "Você não pode assistir a sessão noturna menor de 16 anos!"

verificarFilme(10, true, "Manhã")
    .then((msg) => console.log(msg)) // "Bom filme! (Sessão Infantil)"
    .catch((msg) => console.log(msg));

verificarFilme(20, true, "Noturno")
    .then((msg) => console.log(msg)) // "Bom filme! 🍿"
    .catch((msg) => console.log(msg));