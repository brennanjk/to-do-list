import {format} from 'date-fns';
import clearTasks from "./clear-tasks";
import { taskList, removeTask, toggleTask } from "./tasks";

export default function loadTasks() {
    clearTasks();
    addTasks(taskList);
}

function addTasks(tasks) {
    //write tasks to DOM from todaysTasks array

    tasks.forEach(task => {
        
        const taskDiv = document.createElement('li');
        taskDiv.classList.add('task');
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
        taskDiv.appendChild(taskCheck);
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(dueDate);
        taskDiv.appendChild(taskPriority);
        taskDiv.appendChild(taskDelete);

        //append new task to the taskList
        const taskContainer = document.querySelector('.task-list');
        taskContainer.appendChild(taskDiv);
    })
}
