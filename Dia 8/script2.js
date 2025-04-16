function calcularIMC(){
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let resultado = document.getElementById('resultado')
    
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }
    
    let imc = peso / (altura * altura);
    let classificacao = "";
    
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }
    
    resultado.textContent = `Seu imc é ${imc.toFixed(2)} - Classificação ${classificacao}`
    }