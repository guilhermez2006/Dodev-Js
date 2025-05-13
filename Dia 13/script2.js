class Carro {
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }
    CalcularTempoMedio(distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
        return resultado;
    }
}
const carro1 = new Carro("Ferrari SF90 Stradale", "1000 cv", 340, 2.5);
const carro2 = new Carro("Porsche 911 GT3 RS", "525 cv", 296, 3.2);
const carro3 = new Carro("Mercedes-AMG One", "1063 cv", 352, 2.9);
const carro4 = new Carro("McLaren P1", "916 cv", 350, 2.8);

// Array de objetos da classe Carro
const listaDeCarros = [carro1, carro2, carro3, carro4];

class Corrida {
    constructor(nome, tipo, distancia, participantes, vencedor) {
        this.nome = nome;
        this.tipo = tipo;
        this.distancia = distancia;
        this.participantes = participantes;
        this.vencedor = vencedor;
    }

    VencedorEmMenorTempo() {
        if (!this.participantes || this.participantes.length === 0) {
            alert("Não há participantes na corrida!");
            return;
        }

        let vencedorTemporario = null;
        let menorTempo = Infinity;

        for (const carro of this.participantes) {
            const tempo = carro.CalcularTempoMedio(this.distancia);

            if (tempo < menorTempo) {
                menorTempo = tempo;
                vencedorTemporario = carro;
            }
        }

        if (vencedorTemporario) {
            this.vencedor = vencedorTemporario.nome;
        } else {
            this.vencedor = "Nenhum vencedor encontrado.";
        }
    }

    ExibirVencedor() {
        if (this.vencedor) {
            alert(`O vencedor da corrida "${this.nome}" é: ${this.vencedor}`);
        } else {
            alert(`A corrida "${this.nome}" ainda não tem um vencedor definido.`);
        }
    }
}

const corrida = new Corrida("Monâco", "Formula 1", 3377, listaDeCarros);

corrida.VencedorEmMenorTempo();
corrida.ExibirVencedor();
