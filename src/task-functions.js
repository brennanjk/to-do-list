import {format} from 'date-fns';
import { taskList, task } from './task-objects';
import { storeTaskList } from './storage/storage';

export {loadTask};

export default function taskForm() {
    const container = document.querySelector('.container');

    const form = document.createElement('form');
    form.classList.add('task-form');
    form.name = 'task-form';
    form.textContent = 'Add New Task'

    const taskDiv = document.createElement('div');
    const taskLabel = document.createElement('label');
    taskLabel.for = 'task';
    const taskInput = document.createElement('input');
    taskInput.type = 'text'; taskInput.id = 'task'; taskInput.name = 'task'; taskInput.placeholder = 'Task Description'; taskInput.required = true; taskInput.maxLength='40';
    taskDiv.appendChild(taskLabel); taskDiv.appendChild(taskInput);

    const prioDiv = document.createElement('div');
    const prioSelect = document.createElement('select');
    prioSelect.name = 'Priority';
    const option1 = document.createElement('option');
    option1.value = 'low';
    option1.textContent = 'Low';
    const option2 = document.createElement('option');
    option2.value = 'medium';
    option2.textContent = 'Medium';
    const option3 = document.createElement('option');
    option3.value = 'high';
    option3.textContent = 'High';
    prioDiv.appendChild(prioSelect);
    prioSelect.appendChild(option1); prioSelect.appendChild(option2); prioSelect.appendChild(option3);
    const dateDiv = document.createElement('div');
    const dateInput = document.createElement('input');
    dateInput.type = 'date'; dateInput.id = 'due-date'; dateInput.name = 'due-date'; dateInput.required = true;
    dateDiv.appendChild(dateInput);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit'; submitBtn.id = 'submit-btn';
    submitBtn.textContent = 'Create Task';

    form.addEventListener("submit", submitTask);

    form.appendChild(taskDiv); form.appendChild(prioDiv); form.appendChild(dateDiv); form.appendChild(submitBtn); 
    container.appendChild(form);

    //disable new task button when this form is triggered
    toggleAddBtn();
}

//Function to trigger on taskForm submit
function submitTask(event) {
    const description = document.querySelector('[name="task"]').value;
    const priority = document.querySelector('[name="Priority"]').value;
    const dueDate = document.querySelector('[name="due-date"]').value;
    const newTask = new task(description, priority, dueDate);
    //check if a task with this description already exists
    const duplicateCheck = taskList.find(task => task.description === description);
    if (duplicateCheck) {
        alert("A task with that name already exists. Please enter a different name");
        event.preventDefault();
    }
    else {
        addToList(newTask);
        loadTask(newTask);
        console.log(taskList);
        event.preventDefault();
        this.reset();
        this.remove();

        //re-enable add task button
        toggleAddBtn();
    }
}

//function to trigger within submitTask that adds the newly created task object to our taskList array
function addToList(newTask) {
    //add task to taskList array
    taskList.push(newTask);

    //update taskList session storage
    storeTaskList();
}

//function to toggle the new task button off and on when the new task form is active

function toggleAddBtn() {
    const addBtn = document.querySelector('.add-task-btn');
    if (addBtn.disabled === false) {
        addBtn.disabled = true;
    }
    else {
        addBtn.disabled = false;
    }
}

//function that adds tasks to the Dom, both when submitting a new task, or when changing page views
function loadTask(task) {

    function addTask(newTask) {
        //Add task to DOM
        const task = document.createElement('li');
        task.classList.add('task');
        const taskCheck = document.createElement('input');
        taskCheck.classList.add('task-check');
        //check if new task 'completed' key has a value of true; if yes add completed class so tasks will remain checked when switching between different page views
        if (newTask.completed === true) {
            task.classList.add('completed');
            taskCheck.checked = true;
        };
        taskCheck.setAttribute('type','checkbox');
        taskCheck.addEventListener('click', toggleTask);
        const taskText = document.createElement('div');
        taskText.textContent = `${newTask.description}`;
        taskText.classList.add('description');
        const dueDate = document.createElement('div');
        const dateObject = new Date(newTask.dueDate);
        //Adjust date object so it shows the local timezone, otherwise it will use UTC time and the returned date will be off
        dateObject.setMinutes(dateObject.getMinutes() + dateObject.getTimezoneOffset());
        dueDate.textContent = format(dateObject, "MM/dd/yy");
        dueDate.classList.add('due-date');
        const taskPriority = document.createElement('div');
        taskPriority.textContent = `${newTask.priority}`;
        taskPriority.classList.add(`${newTask.priority}`);
        taskPriority.classList.add('priority');
        const taskDelete = document.createElement('button');
        taskDelete.classList.add('task-delete');
        taskDelete.textContent = 'X';
        taskDelete.addEventListener('click', removeTask);
        //append objects to task li element
        task.appendChild(taskCheck);
        task.appendChild(taskText);
        task.appendChild(dueDate);
        task.appendChild(taskPriority);
        task.appendChild(taskDelete);

        //append new task to the taskList
        const tasks = document.querySelector('.task-list');
        tasks.appendChild(task);
    }

    function removeTask() {
        //Create variable for the sibling task description div related to the delete button pressed
        const descriptor = this.parentNode.querySelector('.description');
        console.log(descriptor.textContent);

        //Find task in taskList array and remove it
        const taskIndex = taskList.findIndex(task => task.description === descriptor.textContent);
        taskList.splice(taskIndex, 1);
        //update session storage tasklist
        storeTaskList();

        //remove the HTML element from the DOM
        this.parentNode.remove();
    }

    function toggleTask() {
        //Create variable for the parent element of the checked box
        const checkParent = this.parentNode;
        //find related task object in task-list
        const descriptor = this.parentNode.querySelector('.description');

        if (this.checked) {
            checkParent.classList.add('completed');
            //change completed key value to 'true' for related taskList object
            const taskIndex = taskList.findIndex(task => task.description === descriptor.textContent);
            taskList[taskIndex].completed = true;
            console.log(taskList[taskIndex].completed);
            //update stored taskList
            storeTaskList();
        }
        else {
            checkParent.classList.remove('completed');
            //change completed key value to 'false' for related taskList object
            const taskIndex = taskList.findIndex(task => task.description === descriptor.textContent);
            taskList[taskIndex].completed = false;
            console.log(taskList[taskIndex].completed);
            //update stored taskList
            storeTaskList();
        }
    }

    addTask(task);
}