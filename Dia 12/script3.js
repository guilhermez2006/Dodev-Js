let nomesUsuarios = [];
let idadesUsuarios = [];

function menu() {
    return prompt(`SISTEMA DE CADASTRO
     1- Cadastrar Usuário
     2- Listar Usuário
     3- Excluir Usuário
     4- Encerrar`)
}

function cadastrarUsuario() {
    let inputNome = prompt("Digite o seu nome:");

    if (inputNome === null) {
        alert("Finalizando cadastro");
        return false;
    }
    if (inputNome.trim() === "") {
        alert("[ERRO] Nome inválido");
        return false;
    }
    if (!isNaN(inputNome)) {
        alert("[ERRO] Nome não pode ser número");
        return false;
    }

    let inputIdade = prompt("Digite sua idade:")

    if (inputIdade === null) {
        alert("Finalizando cadastro");
        return false;
    }
    if (isNaN(inputIdade)) {
        alert("[ERRO] Digite um número válido");
        return false;
    }

    // Validar acesso

    if (inputIdade < 18) {
        alert("Acesso negado!")
        return false;
    }
    else {
        // Salvando quem teve acesso liberado
        alert("Acesso liberado!")
        nomesUsuarios.push(inputNome);
        idadesUsuarios.push(Number(inputIdade));
        return true;
    }
}

function listarUsuario() {
    if (nomesUsuarios.length === 0) {
        alert("[ERRO] Nenhum usuário cadastrado!");
        return false;
    } else {
        alert("Usuários cadastrados: \n" + "- " + nomesUsuarios.join("\n- "))
    }
}

function excluirUsuario() {
    if (nomesUsuarios.length === 0) {
        alert("[ERRO] Nenhum usuário cadastrado!");
        return false;
    }

    // Mostrar lista numerada
    let lista = "";
    for (let i = 0; i < nomesUsuarios.length; i++) {
        lista += (i + 1) + " - " + nomesUsuarios[i] + "\n";
    }
    let excluirUsuario = prompt("Qual usuário deseja excluir?\n" + lista);

    if (excluirUsuario === null || excluirUsuario.trim() === "") {
        alert("Exclusão cancelada");
        return false;
    }

    // Transformando o input em número
    let indice = Number(excluirUsuario) - 1;

    if (isNaN(indice) || indice < 0 || indice >= nomesUsuarios.length) {
        alert("[ERRO] Escolha inválida!");
        return false;
    }

    // Remover do array original
    nomesUsuarios.splice(indice, 1);
    idadesUsuarios.splice(indice, 1);

    alert("Usuário removido!");
    return true;
}


let continuar = true
// LOOP PRINCIPAL
while (continuar) {
    switch (menu()) {
        case "1":
            cadastrarUsuario();
            break;
        case "2":
            listarUsuario();
            break;
        case "3":
            excluirUsuario();
            break;
        case "4":
            setTimeout(function () {
                alert("Encerrando");
            }, 2000);
            continuar = false
            break;
        default:
            alert("[ERRO] Escolha uma das opções numéricas!")
    }
}

