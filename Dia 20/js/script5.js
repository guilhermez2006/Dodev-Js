function possoIrAoCinema(idade, dinheiro) {
    return new Promise(function (resolve, reject) {
        if (idade >= 16 && dinheiro >= 25) resolve("Bora pro cinema! 🍿");
        else if (idade < 16) reject("Classificação indicativa não permite! 🚫");
        else if (dinheiro < 25) reject("Sem grana, sem filme! 😢");
    });
}

possoIrAoCinema(18, 20)
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg));
