import loadPage from "./page-load";
import taskForm from "./tasks"
import loadToday from "./today"

loadPage();

function addListeners() {
    const addBtn = document.querySelector('.add-task-btn');
    const todayBtn = document.querySelector('.nav-today')

    addBtn.addEventListener('click', taskForm);
    todayBtn.addEventListener('click',loadToday)
}

addListeners();