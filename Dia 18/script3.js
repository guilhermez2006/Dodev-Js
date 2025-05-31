document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    return li;
  }

  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Digite uma tarefa!");
      return;
    }

    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
    taskInput.value = "";
    taskInput.focus();
  });
});
