import {isSameWeek} from 'date-fns';
import clearTasks from "../tasks/clear-tasks";
import { taskList } from '../tasks/task-objects';
import { loadTask, addTaskButton } from "../tasks/task-functions";

export default function loadWeek() {
// clear task DOM elements
clearTasks();
addTasks(tasksThisWeek());
addTaskButton();
viewChange();
}

function tasksThisWeek() { 
//create variable that will always be the current date when the function runs.
const todaysDate = new Date();

const weeksTasks = taskList.filter(task => isSameWeek(new Date(task.dueDate), todaysDate));
console.log(weeksTasks);
return weeksTasks;
}

function addTasks(tasks) {
//write tasks to DOM from todaysTasks array

tasks.forEach(task => {
loadTask(task);
})
}

//update view title
function viewChange() {
    const viewTitle = document.querySelector('.view-title');
    viewTitle.textContent = 'Tasks: This Week';
}