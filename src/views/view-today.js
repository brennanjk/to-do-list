import {format} from 'date-fns';
import clearTasks from "../tasks/clear-tasks";
import { taskList } from '../tasks/task-objects';
import { loadTask } from "../tasks/task-functions";

export default function loadToday() {
    // clear task DOM elements
    clearTasks();
    addTasks(tasksToday());
}

function tasksToday() {    
    //create variable that will always be the current date when the function runs.
    const todaysDate = new Date();
    const formattedDate = format(todaysDate, "yyyy-MM-dd")
    console.log(formattedDate)
    console.log(taskList)

    const todaysTasks = taskList.filter(task => task.dueDate === formattedDate);

    return todaysTasks
}

function addTasks(tasks) {
    //write tasks to DOM from todaysTasks array

    tasks.forEach(task => {
        loadTask(task);
    })
}