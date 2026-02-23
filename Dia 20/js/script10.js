function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        console.log("Iniciando verificação...")
        console.log(`Verificando número ${numero}`)

        setTimeout(() => {
            if (numero > 10) {
                resolve("Número valido!")
            }
            else {
                reject("Número inválido!")
            }
        }, 2000)

    })
}

verificarNumero(5)
    .then(msg => console.log(msg))
    .catch(erro => console.log(erro))