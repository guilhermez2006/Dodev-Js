//DECLARANDO VARIÁVEIS
let nome; 
let idade; 
let carteira = false;
let temCarro = false;

//PEDINDO INFORMAÇÕES AO USUÁRIO
nome = prompt("Qual seu nome?");
idade = parseInt(prompt("Qual sua idade?"));
let opcaoCarta = prompt("Você possui carteira de motorista? (sim/não)");
if (opcaoCarta == "sim") {
    carteira = true;
}
let opcaoCarro = prompt("Você possui um carro? (sim/não)");
if (opcaoCarro == "sim") {
    temCarro = true;
}

//PEDINDO MENSAGEM NO CONSOLE
if (idade < 18 || !carteira) {
    console.log(nome + ", você não pode dirigir!");
} else if (idade >= 18 && carteira && !temCarro) {
    console.log(nome + (", você pode dirigir mas não tem carro!")); 
} else {
    console.log(nome + ", você será o motorista!");
}
