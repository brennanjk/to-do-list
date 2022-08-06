import loadPage from "./page-load";
import taskForm from "./tasks"

loadPage();

function addTask() {
    const addBtn = document.querySelector('.add-task-btn');

    addBtn.addEventListener('click', taskForm);
}

addTask();