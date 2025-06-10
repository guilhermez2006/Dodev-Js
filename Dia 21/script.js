function esperar(segundos) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(`Esperei ${segundos} segundos!`);
        }, segundos * 1000);
    });
}

async function executar() {
    const msg = await esperar(2);
    console.log(msg);
}

executar();