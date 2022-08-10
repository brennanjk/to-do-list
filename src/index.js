import loadPage from "./page-load";
import taskForm from "./tasks"
import tasksToday from "./today"

loadPage();

function addListeners() {
    const addBtn = document.querySelector('.add-task-btn');
    const todayBtn = document.querySelector('.nav-today')

    addBtn.addEventListener('click', taskForm);
    todayBtn.addEventListener('click',tasksToday)
}

addListeners();