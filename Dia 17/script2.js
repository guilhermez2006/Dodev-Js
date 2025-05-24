// Classe que gerencia uma lista de tarefas
class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    // Adiciona uma nova tarefa
    adicionar(tarefa) {
        if (tarefa.trim() === '') {
            alert("Por favor, digite uma tarefa.");
            return;
        }
        this.tarefas.push(tarefa);
        this.atualizarLista();
    }

    // Remove uma tarefa pelo índice
    remover(indice) {
        this.tarefas.splice(indice, 1);
        this.atualizarLista();
    }

    // Atualiza o elemento UL no HTML
    atualizarLista() {
        const lista = document.getElementById("lista");
        lista.innerHTML = '';

        this.tarefas.forEach((tarefa, index) => {
            const li = document.createElement("li");
            li.textContent = tarefa;

            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => this.remover(index);

            li.appendChild(botaoRemover);
            lista.appendChild(li);
        });
    }
}

// Instância da classe
const minhaLista = new ListaDeTarefas();

// Função para o botão "Adicionar"
function adicionarTarefa() {
    const input = document.getElementById("inputTarefa");
    const texto = input.value;
    minhaLista.adicionar(texto);
    input.value = '';
    input.focus();
}
