let promisse = new Promise(function (resolve, reject) {
    let senha = 123

    if (senha === 123) {
        resolve("Acesso liberado!")
    }
    else {
        reject("Acesso negado!")
    }
})
promisse
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg))
