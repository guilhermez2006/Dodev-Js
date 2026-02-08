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