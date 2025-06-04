// Definindo a classe base (superclasse)
class Veiculo {
    constructor(marca, modelo, ano) {
        // O construtor inicializa os atributos de um veículo
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false; // Atributo para controlar se o veículo está ligado ou desligado
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.marca} ${this.modelo} (${this.ano}) foi ligado(a).`);
        } else {
            console.log(`${this.marca} ${this.modelo} já está ligado(a).`);
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.marca} ${this.modelo} (${this.ano}) foi desligado(a).`);
        } else {
            console.log(`${this.marca} ${this.modelo} já está desligado(a).`);
        }
    }

    exibirInfo() {
        const status = this.ligado ? "ligado(a)" : "desligado(a)";
        console.log(`\n--- Informações do Veículo ---`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Status: ${status}`);
    }
}

// Definindo uma subclasse (herda de Veiculo)
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        // Chama o construtor da classe base (Veiculo)
        super(marca, modelo, ano);
        this.portas = portas;
    }

    abrirPorta() {
        if (this.ligado) {
            console.log(`Não é seguro abrir a porta do ${this.modelo} com o carro ligado.`);
        } else {
            console.log(`A porta do ${this.modelo} foi aberta.`);
        }
    }

    exibirInfo() {
        super.exibirInfo(); 
        console.log(`Portas: ${this.portas}`);
        console.log(`Tipo: Carro`);
    }
}

// Definindo outra subclasse (herda de Veiculo)
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        // Chama o construtor da classe base (Veiculo)
        super(marca, modelo, ano);
        this.cilindradas = cilindradas; 
    }

    empinar() {
        if (this.ligado) {
            console.log(`A ${this.modelo} está empinando! Cuidado!`);
        } else {
            console.log(`A ${this.modelo} precisa estar ligada para empinar.`);
        }
    }

    exibirInfo() {
        // Sobrescreve o método exibirInfo da classe base para adicionar informações de cilindradas
        super.exibirInfo(); // Chama o método da superclasse
        console.log(`Cilindradas: ${this.cilindradas}cc`);
        console.log(`Tipo: Moto`);
    }
}

console.log("--- Criando e interagindo com um Carro ---");
const meuCarro = new Carro("Ford", "Focus", 2024, 4);
meuCarro.exibirInfo();
meuCarro.ligar();
meuCarro.abrirPorta();
meuCarro.desligar();
meuCarro.abrirPorta();
meuCarro.exibirInfo();

console.log("\n" + "=".repeat(40) + "\n"); 

console.log("--- Criando e interagindo com uma Moto ---");
const minhaMoto = new Moto("Yamaha", "MT-07", 2023, 689);
minhaMoto.exibirInfo();
minhaMoto.ligar();
minhaMoto.empinar();
minhaMoto.desligar();
minhaMoto.empinar();
minhaMoto.exibirInfo();