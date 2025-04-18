let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));
let imc = peso / (altura * altura);
let faixa = "";

if (imc < 18.5) {
    faixa = "Magreza";
} else if (imc >= 18.5 && imc < 24.9) {
    faixa = "Normal";
} else if (imc >= 24.9 && imc < 30) {
    faixa = "Sobrepeso";
} else {
    faixa = "Obesidade";
}

alert("IMC: " + imc.toFixed(2) + " - Faixa: " + faixa);

let idade = parseInt(prompt("Digite sua idade:"));
let anoAtual = 2023;
let anoNascimento = anoAtual - idade;

alert("Ano de nascimento estimado: " + anoNascimento);