// Classe Produto
class Produto {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    vender(qtd) {
        if (this.quantidade >= qtd) {
            this.quantidade -= qtd;
            alert(`Venda de ${qtd} unidades de ${this.nome} realizada!`);
        } else {
            alert(`Estoque insuficiente de ${this.nome}.`);
        }
    }

    repor(qtd) {
        this.quantidade += qtd;
        alert(`${qtd} unidades de ${this.nome} foram repostas!`);
    }

    mostrar() {
        alert(`Produto: ${this.nome} | Estoque: ${this.quantidade} | Preço: R$ ${this.preco}`);
    }
}

// Classe Estoque
class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        alert(`Produto ${produto.nome} adicionado ao estoque!`);
    }

    listarProdutos() {
        if (this.produtos.length === 0) {
            alert("Estoque vazio.");
        } else {
            let lista = "Produtos no estoque:\n";
            this.produtos.forEach(p => {
                lista += `- ${p.nome} | Qtd: ${p.quantidade} | Preço: R$ ${p.preco}\n`;
            });
            alert(lista);
        }
    }

    venderProduto(nome, qtd) {
        const produto = this.produtos.find(p => p.nome === nome);
        if (produto) {
            produto.vender(qtd);
        } else {
            alert(`Produto ${nome} não encontrado.`);
        }
    }

    reporProduto(nome, qtd) {
        const produto = this.produtos.find(p => p.nome === nome);
        if (produto) {
            produto.repor(qtd);
        } else {
            alert(`Produto ${nome} não encontrado.`);
        }
    }
}

// ⚙️ Testando
const estoque = new Estoque();

// Criando produtos
const arroz = new Produto("Arroz", 10, 5);
const feijao = new Produto("Feijão", 8, 7);

// Adicionando produtos no estoque
estoque.adicionarProduto(arroz);
estoque.adicionarProduto(feijao);

// Listando produtos
estoque.listarProdutos();

// Vendendo produto
estoque.venderProduto("Arroz", 3);

// Repondo produto
estoque.reporProduto("Feijão", 5);

// Listando novamente
estoque.listarProdutos();
