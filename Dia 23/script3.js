// 5.
const alunos = [
  { nome: "Fernanda", nota: 8.5, turma: "A" },
  { nome: "Bruno", nota: 5, turma: "B" },
  { nome: "Alice", nota: 7.2, turma: "A" },
  { nome: "Gabriel", nota: 4.8, turma: "C" }
];

const resultado = alunos.map(aluno => {
  let situacao;
  if (aluno.nota >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }
  return {
    nome: aluno.nome,
    situacao: situacao
  };
});

console.log("5.", resultado);