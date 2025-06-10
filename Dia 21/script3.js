function contagemRegressiva() {
    return new Promise(function (resolve, reject) {
        let n = 10;

        if (n <= 0) {
            reject("Valor inválido");
            return;
        }

        function contar(atual) {
            if (atual > 0) {
                console.log(atual);
                setTimeout(function () {
                    contar(atual - 1);
                }, 1000);
            } else {
                resolve("Contagem finalizada!");
            }
        }

        contar(n); // Atribuindo o parametro atual ao valor de n
    });
}

async function exibir() {
    try {
        let msg = await contagemRegressiva();
        console.log(msg);
    } catch (erro) {
        console.log(erro);
    }
}

exibir();