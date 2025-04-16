function CalcularIdade() {
    let AnodeNasc = parseInt(document.getElementById('AnoDeNasc').value);
    const anoAtual = new Date().getFullYear();
    const resultado = document.getElementById('resultado')

    if (!AnodeNasc || AnodeNasc > anoAtual || AnodeNasc < 1900) {
        resultado.textContent = 'Por favor, insira um ano válido.';
        return;
    }
    let idade = anoAtual - AnodeNasc;
    let classificacao = "";

    if (idade < 12) {
        classificacao = "Criança";
    }
    else if (idade < 18) {
        classificacao = "Adolescente";
    }
    else if (idade < 60) {
        classificacao = "Adulto";
    }
    else {
        classificacao = "Idoso";
    }

    resultado.textContent = `Com ${idade} anos, Você é classificado como ${classificacao}`
}