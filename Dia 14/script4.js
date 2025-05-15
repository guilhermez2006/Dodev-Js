let livros = []
let autor = []
let continuar = true

function adicionarLivros() {
    while (continuar) {
        let opcao = prompt(`SISTEMA DE LIVRARIA
1- Adicionar Livros ao Estoque
2- Listar Livros no Catalágo
3- Buscar Livro por Título
4- Vender Livro
5- Encerrar Programa`)
        let inLivros
        switch (opcao) {
            case '1':
                inLivros = prompt("Digite o Livro em que Deseja adiconar: ")
                if (inLivros === "") {
                    alert("[ERRO] Por favor digite os dados corretamente!")
                }
                else {
                    livros.push(inLivros)
                }
                break;
            case '2':
                if (livros.length === 0) {
                    alert("[ERRO] Não tem livros no estoque!")
                }
                else {
                    alert("Livros no Sistema:\n" + livros.join(", "))
                }
                break;
            case '3':
                inLivros = prompt("Digite o livro em que deseja pesquisar:")
                if (inLivros === null || inLivros.trim() === "") {
                    alert("[ERRO] Por favor digite os dados corretamente!")
                }
                else if (livros.includes(inLivros)) {
                    alert("Livro:\n" + inLivros)
                }
                else {
                    alert(`[ERRO] Não tem ${inLivros} no estoque!`)
                }
                break
            case '4':
                inLivros = prompt("Digite o livro em que deseja vender:")
                if (inLivros === "") {
                    alert("[ERRO] Por favor digite os dados corretamente!")
                }
                else if (!livros.includes(inLivros.trim())) {
                    alert(`[ERRO] Não tem ${inLivros} no estoque!`)
                }
                else {
                    let index = livros.indexOf(inLivros.trim())
                    livros.splice(index, 1)
                }
                break;
            case '5':
                alert("Saindo da Livraria!")
                return;
        }
    }
}
adicionarLivros()