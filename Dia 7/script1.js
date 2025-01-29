let saldo = 1000; // Inicializamos o saldo com um valor inicial
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false;

do {
    const nome = prompt("Digite seu nome:");
    const cpf = prompt("Digite seu CPF:");
    const valor = Number(prompt("Digite o valor da transação: "));
    const operacao = prompt("Qual operação deseja fazer? S / D");

    if (valor < 0) {
        console.log("Valor inválido. A transação não foi realizada.");
    } else if (operacao === "S" && valor > saldo) {
        console.log("Saldo insuficiente. A transação não foi realizada.");
    } else if (operacao === "S") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
    } else if (operacao === "D") {
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
    }

    console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);

} while (continuar);
