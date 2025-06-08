function prepararCafe(forca, callback) {
    console.log(`preparando café com força: ${forca}`)
    setTimeout(() => {
        callback(forca) //Aqui eu defino forca pra que o parametro do callback funcione
    }, 2000);
}

function avisarCafePronto(forca) { //pra que esse parametro aqui funcione
    console.log(`Café com força ${forca} está pronto!`)
}

prepararCafe("Forte", avisarCafePronto) //aqui eu defino a forca como string e depois chamo o callback