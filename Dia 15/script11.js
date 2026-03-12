let valorBitcoinDia = [8, 4, 1, 6, 5, 2];

function comprarBitcoin(listaBit) {
    
    // Começa com 0 pois qualquer lucro positivo já será maior
    let melhorLucro = 0;

    // i = dia de COMPRA — percorre do início ao fim
    for (let i = 0; i < listaBit.length; i++) {
        
        // j = dia de VENDA — começa DEPOIS de i (não dá pra vender antes de comprar!)
        for (let j = i + 1; j < listaBit.length; j++) {
            
            // lucro = venda - compra (j vem depois, então é o maior)
            let valorAtual = listaBit[j] - listaBit[i];
            
            // SÓ atualiza se encontrou lucro MAIOR que o atual
            if (valorAtual > melhorLucro) {
                melhorLucro = valorAtual;
            }
        }
    }

    return melhorLucro;
}

let resultado = comprarBitcoin(valorBitcoinDia)
console.log(resultado)