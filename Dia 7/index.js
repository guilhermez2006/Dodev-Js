//CRIANDO VARIÁVEIS
let mediageral = 0
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

//nota,sexo
while (contador <= 10) {
    nota = parseInt(prompt("Digite a nota do " + contador + "º aluno"))
    sexo = prompt("Digite o sexo do aluno (m/f)")

    if (sexo == "m") {
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

    if (sexo == "f" && nota > 7) {
        qtdMulheresAcimaDe7++
    }

    mediageral += nota
    contador++
}

mediageral = mediageral / 10

console.log("A média geral dos alunos foi: " + mediageral)
console.log("A quantidade de homens cadastrados foi: " + qtdHomens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi: " + qtdMulheresAcimaDe7)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)
