import loadPage from "./page-load";
import taskForm from "./task-functions"
import loadTasks from "./views/view-all"
import loadToday from "./views/view-today"
import loadWeek from "./views/view-week"

loadPage();

function addListeners() {
const addBtn = document.querySelector('.add-task-btn');
const tasksBtn = document.querySelector('.nav-tasks');
const todayBtn = document.querySelector('.nav-today');
const weekBtn = document.querySelector('.nav-week');

addBtn.addEventListener('click', taskForm);
tasksBtn.addEventListener('click',loadTasks);
todayBtn.addEventListener('click',loadToday);
weekBtn.addEventListener('click', loadWeek);
}

addListeners();
