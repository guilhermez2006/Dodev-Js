function fazerSuco(sabor, callback) {
    console.log(`Preparando suco de ${sabor}`)

    setTimeout(() => {
        callback(sabor)
    }, 2000)
}

function avisarQueSucoEstaPronto(sabor) {
    console.log(`O suco de ${sabor} está pronto!`)
}

fazerSuco("laranja", avisarQueSucoEstaPronto);

