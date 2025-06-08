// 1º - DECLARA A FUNÇÃO 

function verificarEnergia(energiaAtual) {
    return new Promise((resolve, reject) => {
        if (energiaAtual === 10) resolve("ENERGIA MÁXIMA! 💥 Pronto pra batalha!");
        else if (energiaAtual < 10) reject("Energia baixa... ⚠️ Pegue um power-up!");
        else reject("Energia sobrecarregada! ⚡ Explosão iminente!");
    });
}

// 2º - CHAMA A FUNÇÃO (DOS DOIS JEITOS VÁLIDOS):

// JEITO 1 (Direto):
verificarEnergia(10)
    .then(msg => console.log(msg))
    .catch(erro => console.log(erro));

// JEITO 2 (Com variável):
const energiaDoJogador = 7;
verificarEnergia(energiaDoJogador)
    .then(msg => console.log(msg))
    .catch(erro => console.log(erro));
