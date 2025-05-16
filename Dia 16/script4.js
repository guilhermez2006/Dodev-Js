// HERANÇA
class Animal {
    constructor(nome) {
        this.nome = nome
    }
    emitirSom() {
        alert(`O ${this.nome} emitiu um som!`)
    }
}

class Gato extends Animal {
    constructor(nome) {
        super(nome)
    }
    emitirSom() {
        alert(`O gato ${this.nome} miou!`);
    }
}
class Cachorro extends Animal {
    constructor(nome) {
        super(nome)
    }
    emitirSom() {
        alert(`O cachorro ${this.nome} latiu!`);
    }
}
const gato = new Gato("Nina")
const cachorro = new Cachorro("Thor")
gato.emitirSom()
cachorro.emitirSom()