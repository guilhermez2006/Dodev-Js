function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        console.log("Iniciando verificação...")

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