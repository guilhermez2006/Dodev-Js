var promessaDoNumero = new Promise(function (certo, errado) {
    var numero = 7

    if (numero === 7) {
        certo("ACERTOU, É 7! 🎉")  // Se der bom
    } else {
        errado("ERROU, NÃO É 7!")  // Se der ruim
    }
})
promessaDoNumero
    .then(function (mensagem) {  // then = CERTO
        console.log("SUCESSO: " + mensagem)
    })
    .catch(function (erro) {  // catch = ERRADO
        console.error("FRACASSO: " + erro)
    })