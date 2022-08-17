import {format} from 'date-fns';
import clearTasks from "../tasks/clear-tasks";
import { taskList } from '../tasks/task-objects';
import { loadTask, addTaskButton}  from "../tasks/task-functions";

export default function loadTasks() {
    clearTasks();
    console.log(taskList);
    addTasks(taskList);
    addTaskButton();
    viewChange();
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
    viewTitle.textContent = 'Tasks: All';
}
