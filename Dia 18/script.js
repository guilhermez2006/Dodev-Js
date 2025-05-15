// CRIANDO CLASSE LIVRO
class Livro {
    Titulo;
    Autor;
    Editora;
    AnoDePublicacao;
    Disponibilidade = true;

    constructor(Titulo, Autor, Editora, AnoDePublicacao) {
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Editora = Editora;
        this.AnoDePublicacao = AnoDePublicacao;
    }
}

// CRIANDO OBJETOS DA CLASSE LIVRO
let livros = [];
livros.push(new Livro("livro1", "marcos", "editora A", 2001));
livros.push(new Livro("livro2", "marcos", "editora F", 1997));
livros.push(new Livro("livro3", "carlos", "editora B", 2010));
livros.push(new Livro("livro4", "joão", "editora A", 2005));
livros.push(new Livro("livro5", "fábio", "editora C", 2020));

// CRIANDO CLASSE BIBLIOTECA
class Biblioteca {
    Nome;
    Endereco;
    Telefone;
    AcervoLivros = [];

    constructor(nome, telefone, endereco, acervo) {
        this.Nome = nome;
        this.Telefone = telefone;
        this.Endereco = endereco;
        this.AcervoLivros = acervo;
    }

    BuscarLivroPeloTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                console.log(livro);
            }
        });
    }

    EmprestarLivro(titulo) {
        let emprestado = false;
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                if (livro.Disponibilidade === true) {
                    livro.Disponibilidade = false;
                    emprestado = true;
                }
            }
        });
        if (emprestado) {
            return true;
        } else {
            return false;
        }
    }

    DevolverLivro(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                livro.Disponibilidade = true;
                console.log("Livro devolvido");
            }
        });
    }
}

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2", livros);

biblioteca.BuscarLivroPeloTitulo("livro2");
biblioteca.EmprestarLivro("livro1");
biblioteca.DevolverLivro("livro1");