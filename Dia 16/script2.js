class Carro {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }
    ligar(){
        alert(`O carro da marca ${this.marca} modelo ${this.modelo} ligou!`)
    }
}
let carro1 = new Carro("Ferrari", "F40")
let carro2 = new Carro("Fiat", "Punto")
carro1.ligar()
carro2.ligar()