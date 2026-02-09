function validarUsuario(nome, idade, sucessoCallback, erroCallback) {

    console.log("Validando usuário...")
    setTimeout(() => {
        if (nome == null) {
            erroCallback("[ERRO] Digite um usuário!")
        }
        else if (idade < 18) {
            erroCallback("[ERRO] Idade menor que 18!")
        }
        else {
            sucessoCallback()
        }
    }, 2000)
}

function sucessoCallback() {
    console.log("Usuário autorizado!")
}

function erroCallback(mensagem) {
    console.log("Erro: " + mensagem)
}

validarUsuario("Guilherme", 18, sucessoCallback, erroCallback)

/*
      Código com Promisse

function validarUsuario(nome, idade) {
    return new Promise((resolve, reject) => {
        console.log("Validando usuário...");

        setTimeout(() => {
            if (!nome) {
                reject("[ERRO] Digite um usuário!");
            } else if (idade < 18) {
                reject("[ERRO] Idade menor que 18!");
            } else {
                resolve(); // deu certo
            }
        }, 2000);
    });
}

validarUsuario("Guilherme", 18)
.then(() => console.log("Usuário autorizado!"))
.catch(erro => console.log("Erro: " + erro));

*/
