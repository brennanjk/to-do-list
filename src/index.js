import loadPage from "./page-load";
import taskForm from "./tasks/task-functions"
import loadTasks from "./views/view-all"
import loadToday from "./views/view-today"
import loadWeek from "./views/view-week"
import projectForm from "./projects/new-project"

loadPage();

function addListeners() {
const addBtn = document.querySelector('.add-task-btn');
const tasksBtn = document.querySelector('.nav-tasks');
const todayBtn = document.querySelector('.nav-today');
const weekBtn = document.querySelector('.nav-week');
const projectBtn = document.querySelector('.add-project-btn');

addBtn.addEventListener('click', taskForm);
tasksBtn.addEventListener('click',loadTasks);
todayBtn.addEventListener('click',loadToday);
weekBtn.addEventListener('click', loadWeek);
projectBtn.addEventListener('click', projectForm);
}

addListeners();
