function processarNota(nota, callback) {
    console.log("Processando nota...")
    setTimeout(() => {
        callback(nota)
    }, 2000)
}

function verificarNota(nota, callback) {
    if (nota >= 7) {
        console.log("Aprovado!")
    }
    else if (nota < 7) {
        console.log("Reprovado!")
    }
}

processarNota(10, verificarNota)












