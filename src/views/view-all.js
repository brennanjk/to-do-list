import {format} from 'date-fns';
import clearTasks from "../tasks/clear-tasks";
import { taskList } from '../tasks/task-objects';
import { loadTask, addTaskButton}  from "../tasks/task-functions";

export default function loadTasks() {
    clearTasks();
    console.log(taskList);
    addTasks(taskList);
    addTaskButton();
}

function addTasks(tasks) {
    //write tasks to DOM from todaysTasks array

    tasks.forEach(task => {
        loadTask(task);
    })
}
