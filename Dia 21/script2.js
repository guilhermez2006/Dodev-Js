function obterNumeroAleatorio() {
    return new Promise(function (resolve, reject) {
        let numero = Math.floor(Math.random() * 10) + 1;
        if (numero > 5) {
            resolve(`Sucesso! Número alto: ${numero}`);
        } else {
            reject(`Erro! Número baixo ou igual a 5: ${numero}`);
        }
    });
}

async function executar() {
    try {
        const msg = await obterNumeroAleatorio();
        console.log(msg);
    } catch (erro) {
        console.log(erro);
    }
}

executar();