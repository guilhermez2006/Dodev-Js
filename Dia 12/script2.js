let nomesDosAlunos = [];
let notas = [];

// MENU
function menu() {
  return prompt(
    "CADASTRO DE ALUNOS\n" +
    "1 - Cadastrar aluno\n" +
    "2 - Listar alunos\n" +
    "3 - Excluir aluno"
  );
}

// CADASTRAR
function cadastrarAluno() {
  let nome = prompt("Digite o nome do aluno:");

  if (nome === null) {
    alert("Finalizando cadastro");
    return;
  }

  if (nome.trim() === "") {
    alert("[ERRO] Nome inválido");
    return;
  }

  if (!isNaN(nome)) {
    alert("[ERRO] Nome não pode ser número");
    return;
  }

  let nota = prompt("Digite a nota de matemática:");

  if (nota === null) {
    alert("Finalizando cadastro");
    return;
  }

  if (isNaN(nota)) {
    alert("[ERRO] Digite um número válido");
    return;
  }

  if (nota < 0 || nota > 10) {
    alert("[ERRO] Nota deve ser entre 0 e 10");
    return;
  }

  nomesDosAlunos.push(nome);
  notas.push(Number(nota));

  if (nota >= 7) {
    alert(`${nome} foi aprovado`);
  } else if (nota >= 5) {
    alert(`${nome} está em recuperação`);
  } else {
    alert(`${nome} foi reprovado`);
  }
}

// LISTAR
function listarAlunos() {
  if (nomesDosAlunos.length === 0) {
    alert("Nenhum aluno cadastrado");
    return;
  }

  alert("- " + nomesDosAlunos.join("\n- "));
}

// EXCLUIR
function excluirAluno() {
  if (nomesDosAlunos.length === 0) {
    alert("Não há alunos para excluir");
    return;
  }

 let nome = prompt( 
  "Digite o nome do aluno para excluir:\n- " +
  nomesDosAlunos.join("\n- ")
);


  if (nome === null) {
    alert("Nenhum aluno excluído");
    return;
  }

  if (nome.trim() === "") {
    alert("[ERRO] Nome inválido");
    return;
  }

  if (!isNaN(nome)) {
    alert("[ERRO] Nome não pode ser número");
    return;
  }

  let index = nomesDosAlunos.indexOf(nome);

  if (index === -1) {
    alert("Aluno não encontrado");
    return;
  }

  nomesDosAlunos.splice(index, 1);
  notas.splice(index, 1);

  alert("Aluno removido com sucesso");
}

// LOOP PRINCIPAL
while (true) {
  let opcao = menu();

  if (opcao === null) {
    alert("Programa finalizado");
    break;
  }

  if (opcao === "1") {
    cadastrarAluno();
  } else if (opcao === "2") {
    listarAlunos();
  } else if (opcao === "3") {
    excluirAluno();
  } else {
    alert("Opção inválida");
  }
}
