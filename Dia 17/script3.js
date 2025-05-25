// ===============================
// 🎯 Sistema de Gerenciamento de Tarefas
// ===============================

class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.completed = false;
        this.createdAt = new Date();
    }

    markAsCompleted() {
        this.completed = true;
    }

    markAsPending() {
        this.completed = false;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description) {
        const task = new Task(title, description);
        this.tasks.push(task);
        console.log(`✅ Tarefa "${title}" adicionada com sucesso!`);
    }

    listTasks() {
        console.log("\n📋 Lista de Tarefas:");
        if (this.tasks.length === 0) {
            console.log("⚠️ Nenhuma tarefa cadastrada.");
            return;
        }
        this.tasks.forEach((task, index) => {
            const status = task.completed ? "✔️ Concluída" : "❌ Pendente";
            console.log(
                `${index + 1}. ${task.title} - ${status} (Criada em: ${task.createdAt.toLocaleString()})\n   Descrição: ${task.description}`
            );
        });
    }

    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].markAsCompleted();
            console.log(`🎉 Tarefa "${this.tasks[index].title}" marcada como concluída!`);
        } else {
            console.log("🚫 Tarefa não encontrada.");
        }
    }

    deleteTask(index) {
        if (this.tasks[index]) {
            const removed = this.tasks.splice(index, 1);
            console.log(`🗑️ Tarefa "${removed[0].title}" removida com sucesso!`);
        } else {
            console.log("🚫 Tarefa não encontrada.");
        }
    }
}

// ===============================
// 🚀 Execução de Demonstração
// ===============================

const myTasks = new TaskManager();

myTasks.addTask("Estudar JavaScript", "Focar em classes, arrays e métodos.");
myTasks.addTask("Ir à academia", "Treino de peito e tríceps.");
myTasks.addTask("Fazer projeto no GitHub", "Subir um código com boas práticas.");

myTasks.listTasks();

myTasks.completeTask(0);

myTasks.listTasks();

myTasks.deleteTask(1);

myTasks.listTasks();
