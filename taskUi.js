import {Storage} from './Storage'

export function taskUI(task, parent) {
    let div = document.createElement("div");
    div.classList.add("task-wrapper");


    let checkBoxTask = document.createElement("input");
    checkBoxTask.type = "checkbox";
    checkBoxTask.checked = task.completed;
    checkBoxTask.classList.add("checkbox");

    let taskName = document.createElement("label");
    taskName.innerText = task.description;
    taskName.classList.add("task-description");

    let wrapperCheckDescription = document.createElement("div");
    wrapperCheckDescription.classList.add("wrapper-check-description");
    wrapperCheckDescription.appendChild(checkBoxTask);
    wrapperCheckDescription.appendChild(taskName);

    div.appendChild(wrapperCheckDescription);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.classList.add("button-delete");

    deleteButton.addEventListener("click", () => {
        const storage = new Storage("tasks");
        let tasks = storage.getTasks();
        tasks = tasks.filter(t => t.description !== task.description);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        parent.removeChild(div); // Remove do DOM
    });

    div.appendChild(deleteButton);

    parent.appendChild(div);
}
