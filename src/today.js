import {format} from 'date-fns';
import clearTasks from "./clear-tasks";
import { taskList, removeTask, toggleTask } from "./tasks";

function tasksToday() {
    // clear task DOM elements
    clearTasks();
    
    //create variable that will always be the current date when the function runs.
    const todaysDate = new Date();
    const formattedDate = format(todaysDate, "yyyy-MM-dd")
    console.log(formattedDate)
    console.log(taskList[0].dueDate)

    const todaysTasks = taskList.filter(task => task.dueDate === formattedDate);

    return todaysTasks
}

export default function addTasks() {
    //write tasks to DOM from todaysTasks array
    const tasks = tasksToday()
    console.log(tasks);

    tasks.forEach(task => {
        
        const taskToday = document.createElement('li');
        taskToday.classList.add('task');
        const taskCheck = document.createElement('input');
        taskCheck.classList.add('task-check');
        taskCheck.setAttribute('type','checkbox');
        taskCheck.addEventListener('click', toggleTask);
        const taskText = document.createElement('div');
        taskText.textContent = `${task.description}`;
        taskText.classList.add('description');
        const dueDate = document.createElement('div');
        const dateObject = new Date(task.dueDate);
        //Adjust date object so it shows the local timezone, otherwise it will use UTC time and the returned date will be off
        dateObject.setMinutes(dateObject.getMinutes() + dateObject.getTimezoneOffset());
        dueDate.textContent = format(dateObject, "MM/dd/yy");
        dueDate.classList.add('due-date');
        const taskPriority = document.createElement('div');
        taskPriority.textContent = `${task.priority}`;
        taskPriority.classList.add(`${task.priority}`);
        taskPriority.classList.add('priority');
        const taskDelete = document.createElement('button');
        taskDelete.classList.add('task-delete');
        taskDelete.textContent = 'X';
        taskDelete.addEventListener('click', removeTask);
        //append objects to task li element
        taskToday.appendChild(taskCheck);
        taskToday.appendChild(taskText);
        taskToday.appendChild(dueDate);
        taskToday.appendChild(taskPriority);
        taskToday.appendChild(taskDelete);

        //append new task to the taskList
        const taskContainer = document.querySelector('.task-list');
        taskContainer.appendChild(taskToday);
    })

}