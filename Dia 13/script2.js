class Carro {

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }
    CalcularTempoMedio(distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado;
    }
    ExibirInformacoes() {
        alert(`Nome do carro: ${this.nome}\nPotência: ${this.potencia}\nVelocidade Máxima: ${this.velocidadeMaxima}\nAceleração: ${this.aceleracao}`)
    }
}

const carro1 = new Carro("Ferrari", "1.000 cv", 400, 4)
carro1.ExibirInformacoes()
