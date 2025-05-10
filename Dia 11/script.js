let nomes = []
let notas = []
let continuar = true

while (continuar) {
    let nome = prompt("Digite seu nome: ")
    let nota = parseFloat(prompt("Digite sua nota da prova: "))

    // Verifica se a nota é um número válido
    if (!isNaN(nota)) {
        nomes.push(nome);
        notas.push(nota);
    } else {
        alert("Nota inválida. Tente novamente.");
    }

    continuar = confirm("Deseja continuar?")
}

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma += parseFloat(notas[i]);
}

let media = soma / nomes.length;

alert(`As notas de ${nomes.join(", ")}  são: ${notas.join(", ")}\n A soma das notas é: ${soma}\n A média da turma é: ${media.toFixed(2)}`)