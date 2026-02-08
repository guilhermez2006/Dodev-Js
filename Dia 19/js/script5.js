function verificarIdade(idade, callback) {
    console.log(`Verficando idade...`)
    setTimeout(function () {
        callback(idade)
    }, 2000);
}

function mostrarIdade(idade) {
    if (idade >= 18) {
        console.log(`Maior de idade!`)
    }
    else if (idade < 18) {
        console.log(`Menor de idade!`)
    }
}
verificarIdade(18, mostrarIdade)