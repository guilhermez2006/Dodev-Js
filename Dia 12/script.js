let nomes = [];
let senhas = [];
let continuar = true;
let contador = 0;

function comunidadeDodev() {
    let nome = "";
    let senha = "";

    while (continuar) {
        let opcao = prompt(`Deseja: (1- Cadastrar) (2- Login) (3- Excluir Cadastro) (4- Encerrar)`);

        if (opcao !== "1" && opcao !== "2" && opcao !== "3" && opcao !== "4") {
            alert("[ERRO] Digite os números conforme as opções!");
            continue; // Volta pro menu
        }

        switch (opcao) {
            case "1": // Cadastro
                nome = prompt("Digite seu nome: ");
                senha = prompt("Digite sua senha: ");

                if (!nome || !senha) {
                    alert("[ERRO] Digite seu nome e senha!");
                } else {
                    nomes[contador] = nome;
                    senhas[contador] = senha;
                    contador++;
                    alert("Cadastro realizado com sucesso!");
                }
                break;

            case "2": // Login
                nome = prompt("Digite seu nome: ");
                senha = prompt("Digite sua senha: ");

                let indice = nomes.indexOf(nome);

                if (indice === -1) {
                    alert("Nome não encontrado, faça um cadastro!");
                } else if (senhas[indice] !== senha) {
                    alert("Senha incorreta!");
                } else {
                    alert("Login com sucesso!");
                }
                break;

            case "3": // Excluir Cadastro
                nome = prompt("Digite o nome em que deseja excluir:");
                senha = prompt("Digite sua senha:");

                let indiceExcluir = nomes.indexOf(nome);

                if (indiceExcluir !== -1 && senhas[indiceExcluir] === senha) {
                    nomes.splice(indiceExcluir, 1);
                    senhas.splice(indiceExcluir, 1);
                    contador--; // Atualiza o contador, já que você removeu 1
                    alert("Cadastro excluído com sucesso!");
                } else {
                    alert("Nome ou senha incorretos!");
                }
                break;

            case "4": // Encerrar
                continuar = false;
                alert("Programa encerrado!");
                break;
        }
    }
}

comunidadeDodev();
