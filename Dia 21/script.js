function numero() {
    return new Promise(function (resolve, reject) {
        let num = 10

        if (num === 0) {
            reject("O número é 0")
        }
        else if (num > 0) {
            console.log("Calculando...")
            setTimeout(() => {
                resolve(`O dobro de ${num} é ${num * 2}!`)
            }, 2000);
        }
    })
}

async function executar() {
    try {
        let msg = await numero()
        console.log(msg)
    }
    catch (erro) {
        erro = console.log(erro)
        console.log(erro)
    }
}
executar()