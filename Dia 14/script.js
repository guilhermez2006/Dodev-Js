let desejaContinuar = true;

function Reajuste() {
    while (desejaContinuar) {
        let nome = prompt("Digite o seu nome: ");
        let salario = parseFloat(prompt("Digite o seu salário: "));

        if (isNaN(salario)) {
            alert("[ERRO] Digite o seu salário Por favor!");
        } else {
            function AumentoDeSalario(nomeAtual, salarioAtual) {
                let aumentoPercentual = 0;
                if (salarioAtual <= 1500) {
                    aumentoPercentual = 0.20;
                } else if (salarioAtual > 1500 && salarioAtual < 2000) {
                    aumentoPercentual = 0.15;
                } else if (salarioAtual > 2000 && salarioAtual < 3000) {
                    aumentoPercentual = 0.10;
                } else if (salarioAtual > 3000) {
                    aumentoPercentual = 0.5;
                }

                let valorDeAumento = salarioAtual * aumentoPercentual;
                let novoSalario = salarioAtual + valorDeAumento;
                alert(`Olá ${nomeAtual}, o seu aumento salarial foi de ${aumentoPercentual * 100}%! Novo salario: ${parseFloat(novoSalario)}`);
            }
            AumentoDeSalario(nome, salario);
        }

        desejaContinuar = confirm("Deseja continuar Inserindo dados?");
    }
}

Reajuste();