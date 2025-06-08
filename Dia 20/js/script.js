function esperar(segundos) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(`Esperei ${segundos} segundos!`);
        }, segundos * 1000);
    });
}

esperar(2).then(function (msg) {
    console.log(msg);
});
