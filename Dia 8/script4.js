function Calcular() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operacao = document.getElementById('Opcao').value;
    let resultado
    switch (operacao) {
        case "somar":
            resultado = num1 + num2
            break;
        case "subtracao":
            resultado = num1 - num2
            break;
        case "divisao":
            resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
            break;
        case "multiplicacao":
            resultado = num1 * num2
            break;
        default:
            alert("[ERRO] Atualize a página e tente novamente!")
    }
    document.getElementById('resultado').textContent = "O resultado é: " + resultado;

}
document.getElementById('ButtonCalcular').addEventListener('click', Calcular);