function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        console.log("Iniciando Processo...")
        console.log(`Verificando número ${numero}`)
        
        setTimeout(() => {
            if (numero > 10) {
                resolve("Número válido!") 
            } else {
                reject("Número inválido!")
            }
        }, 2000)
    })
}

function salvarNumero() {
    return new Promise(resolve => {
        console.log("Salvando número...")
        setTimeout(() => {
            console.log("Número salvo no banco")
            console.log("Processo finalizado!")
            resolve() // libera o próximo .then()
        }, 1000)
    })
}

verificarNumero(15)
    .then(msg => {
        console.log(msg)
        return salvarNumero() // retorna a Promise de salvar para encadear
    })
    .then(() => {
        console.log("Tudo finalizado com sucesso!")
    })
    .catch(erro => console.log(erro))