const taskInput = document.getElementById("task");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Agregar tarea
addButton.addEventListener("click", () => {
    if (taskInput.value !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");

        span.innerText = taskInput.value;
        button.innerText = "X";

        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);

        taskInput.value = "";

        button.addEventListener("click", () => {
            li.remove();
        });
    }
});
