import loadPage from "./page-load";
import taskForm from "./tasks"
import loadTasks from "./view-all"
import loadToday from "./view-today"

loadPage();

function addListeners() {
    const addBtn = document.querySelector('.add-task-btn');
    const tasksBtn = document.querySelector('.nav-tasks');
    const todayBtn = document.querySelector('.nav-today');

    addBtn.addEventListener('click', taskForm);
    tasksBtn.addEventListener('click',loadTasks);
    todayBtn.addEventListener('click',loadToday)
}

addListeners();