function verificarSaldo(valor) {
    console.log("Verificando valor...")

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof valor !== "number") {
                reject("Valor inválido (Digite um número)")
                return
            }

            if (valor >= 200) {
                resolve("Saldo suficiente")
            } else {
                reject("Saldo insuficiente!")
            }

        }, 1000)
    })
}

function processarPagamento() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pagamento processado.")
        }, 1000)
    })
}

function gerarRecibo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Recibo gerado.")
        }, 1000)
    })
}

async function executar(valor) {
    try {
        const saldo = await verificarSaldo(valor)
        console.log(saldo)

        const pagamento = await processarPagamento()
        console.log(pagamento)

        const recibo = await gerarRecibo()
        console.log(recibo)

        console.log("Compra finalizada com sucesso!")

    } catch (erro) {
        console.log("Erro:", erro)
    }
}

executar(300)