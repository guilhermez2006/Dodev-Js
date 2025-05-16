class Cachorro {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
    latir(nome) {
        alert(`O cachorro ${this.nome} latiu!`)
    }
    apresentar(nome, raca) {
        alert(`Olá! Eu sou o ${this.nome} e minha raça é ${this.raca}.`)
    }
}
let cachorro1 = new Cachorro("Bob", "Golden Retriver")
let cachorro2 = new Cachorro("Thor", "Vira-lata")
cachorro1.apresentar()
cachorro2.apresentar()
cachorro1.latir()
cachorro2.latir()