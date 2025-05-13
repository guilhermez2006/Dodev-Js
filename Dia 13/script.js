class MeuSetup {
    constructor() {
        this.tipo = "Desktop";
        this.processador = "Intel Core I5 9400";
        this.video = "Dedicado";
        this.armazenamento = "1237GB";
        this.memoriaRam = "16GB";
        this.ssd = true;
    }

    exibirInfo() {
        alert("Meu setup: \nTipo: " + this.tipo + "\nProcessador: " + this.processador +
            "\nVídeo: " + this.video + "\nArmazenamento: " + this.armazenamento +
            "\nMemória RAM: " + this.memoriaRam + "\nSSD: " + (this.ssd ? "Sim" : "Não"));
    }
}

// Criando a instância e exibindo as informações
const meuSetup = new MeuSetup();
meuSetup.exibirInfo();
