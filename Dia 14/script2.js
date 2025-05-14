let carrinho = []
let produtos = ""
let continuar = true
let encerrarPrograma = true
function compras() {
    while (continuar) {
        let opcao = prompt(`SISTEMA DE COMPRAS
1- Inserir produto 
2- Remover item do carrinho
3- Mostrar carrinho
4- Limpar carrinho
5- Encerrar programa`)
        if (opcao === "") {
            alert("[ERRO] Digite a opção em que deseja!")
        }
        else {
            switch (opcao) {
                case '1':
                    produtos = prompt("Qual produto deseja inserir?")
                    carrinho.push(produtos)
                    break;
                case '2':
                    produtos = prompt("Qual produto deseja retirar do carrinho?")
                    const index = carrinho.indexOf(produtos);
                    if (index !== -1) {
                        carrinho.splice(index, 1);
                        alert(`${produtos} removido do carrinho.`);
                    } else {
                        alert(`${produtos} não está no carrinho.`);
                    }
                    break;
                case '3':
                    if (carrinho.length === 0) {
                        alert("O carrinho está vazio!")
                    }
                    else {
                        alert(`Produtos no carrinho: ${carrinho.join(", ")}`)
                    }
                    break;
                case '4':
                    carrinho.length = 0
                    alert("O carrinho está vazio!")
                    break;
                case '5':
                    alert("Programa Encerrado")
                    return;
            }
        }
    }
}
compras()