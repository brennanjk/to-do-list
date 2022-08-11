import {isSameWeek} from 'date-fns';
import clearTasks from "./clear-tasks";
import { taskList } from './task-objects';
import { loadTask } from "./task-functions";

export default function loadWeek() {
// clear task DOM elements
clearTasks();
addTasks(tasksThisWeek());
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