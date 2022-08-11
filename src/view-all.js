import {format} from 'date-fns';
import clearTasks from "./clear-tasks";
import { taskList } from './task-objects';
import { loadTask}  from "./task-functions";

export default function loadTasks() {
    clearTasks();
    console.log(taskList);
    addTasks(taskList);
}

function addTasks(tasks) {
    //write tasks to DOM from todaysTasks array

    tasks.forEach(task => {
        loadTask(task);
    })
}
