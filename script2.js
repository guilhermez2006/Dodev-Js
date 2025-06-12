let usuarios = [
    { id: 1, nome: "Guilherme" },
    { id: 2, nome: "Samuel" },
    { id: 3, nome: "João" }
];

function buscarUsuarioPorId(id) {
    return new Promise(function (resolve, reject) {
        let usuario = usuarios.find(u => u.id === id);
        setTimeout(() => {
            if (usuario) {
                resolve(usuario);
            } else {
                reject("Usuário não encontrado!");
            }
        }, 1000);
    });
}

async function verificar(id) {
    try {
        let usuario = await buscarUsuarioPorId(id);
        console.log("Usuário encontrado: " + usuario.nome);
    } catch (error) {
        console.log("Erro:", error);
    }
}

// Chame a função passando o id do usuário que você quer procurar:
verificar(2);   // Usuário encontrado: Samuel
verificar(99);  // Erro: Usuário não encontrado!