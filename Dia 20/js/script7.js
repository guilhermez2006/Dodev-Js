function verificarLogin(usuario, senha) {
    return new Promise((resolve, reject) => {

        console.log("Verificando login...");

        setTimeout(() => {
            if (usuario === "admin" && senha === "1234") {
                resolve("Login realizado com sucesso!");
            } else {
                reject("Usuário ou senha incorretos!");
            }
        }, 2000);

    });
}

// TESTE 1 - login correto
verificarLogin("admin", "1234")
    .then(msg => console.log(msg))
    .catch(erro => console.log(erro));
