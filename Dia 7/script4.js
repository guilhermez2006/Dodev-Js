//CRIANDO VARIÁVEIS
let mediaGeral = 0;
let qtdHomens = 0;
let qtdMulheres = 0;
let maiorNotaHomens = 0;
let maiorNotaMulheres = 0;

//nota, sexo
for (let contador = 1; contador <= 10; contador++) {
    let nota = parseInt(prompt("Digite a nota do " + contador + " aluno"));
    let sexo = prompt("Digite o sexo do aluno (m/f)");

    if (nota > maiorNotaHomens) {
        maiorNotaHomens = nota;
    }

    if (sexo === "f") {
        qtdMulheres++;
    } else {
        qtdHomens++;
    }

    mediaGeral += nota;
}

mediaGeral = mediaGeral / 10;

console.log("A média geral dos alunos foi: " + mediaGeral);
console.log("A quantidade de homens cadastrados foi: " + qtdHomens);
console.log("A quantidade de mulheres cadastradas foi: " + qtdMulheres);
console.log("A maior nota entre as mulheres foi: " + maiorNotaMulheres);
console.log("A maior nota entre os homens foi: " + maiorNotaHomens);














