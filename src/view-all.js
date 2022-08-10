import {format} from 'date-fns';
import clearTasks from "./clear-tasks";
import { taskList, loadTask } from "./tasks";

export default function loadTasks() {
    clearTasks();
    addTasks(taskList);
}

function addTasks(tasks) {
    //write tasks to DOM from todaysTasks array

    tasks.forEach(task => {
        loadTask(task);
    })
}
