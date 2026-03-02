let idades = [15, 30, 60, 19, 25, 68, 90];
let valorMensalidade = 100;

function calcularDesconto(idadeIndividual) {
    if (idadeIndividual < 18) {
        return 0.8;
    } else if (idadeIndividual > 60) {
        return 0.7;
    } else {
        return 1;
    }
}

function processarMensalidades(listaDeIdades) {
    let mensalidadesFinais = [];

    for (let i = 0; i < listaDeIdades.length; i++) {
        let multiplicador = calcularDesconto(listaDeIdades[i]);
        mensalidadesFinais.push(valorMensalidade * multiplicador);
    }

    return mensalidadesFinais;
}

let resultado = processarMensalidades(idades);
console.log(resultado);
