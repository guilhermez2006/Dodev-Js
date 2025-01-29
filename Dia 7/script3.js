// Passo 1: Perguntar quanto a pessoa quer economizar
let economia = parseInt(prompt("Quanto você quer economizar?"));

// Passo 2: Criar variável para acumular os depósitos
let totalEconomizado = 0;

// Passo 3: Usar o while para continuar enquanto o totalEconomizado for menor que o objetivo
while (totalEconomizado < economia) {
    // Pedir quanto a pessoa quer depositar
    let deposito = parseInt(prompt("Quanto você quer depositar?"));

    // Adicionar o depósito ao totalEconomizado
    totalEconomizado += deposito;

    // Verificar se já atingiu o objetivo
    if (totalEconomizado >= economia) {
        console.log(
            "Parabéns! Você atingiu seu objetivo com " + totalEconomizado + " economizado!"
        );
    } else {
        // Se não atingiu, mostrar quanto falta
        console.log(
            "Faltam " +
                (economia - totalEconomizado) +
                " para atingir seu objetivo."
        );
    }
}
