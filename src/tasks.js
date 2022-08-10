import {addDays, format} from 'date-fns';

export const taskList = [];

export {removeTask, toggleTask};

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
}

class task{

    constructor(description, priority, dueDate) {
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    };
}

function addTask(newTask) {
    //add task to taskList array
    taskList.push(newTask);

    //add task to task list regardless of current view
    const task = document.createElement('li');
    task.classList.add('task');
    const taskCheck = document.createElement('input');
    taskCheck.classList.add('task-check');
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

    //remove the HTML element from the DOM
    this.parentNode.remove();
}

function toggleTask() {
    //Create variable for the parent element of the checked box
    const checkParent = this.parentNode;

    if (this.checked) {
        checkParent.style.textDecoration = 'line-through';
        checkParent.classList.add('completed');
    }
    else {
        checkParent.style.textDecoration = 'none';
        checkParent.classList.remove('completed');
    }
}

function submitTask(event) {
    const description = document.querySelector('[name="task"]').value;
    const priority = document.querySelector('[name="Priority"]').value;
    const dueDate = document.querySelector('[name="due-date"]').value;
    const newTask = new task(description, priority, dueDate);

    addTask(newTask);
    console.log(taskList);
    event.preventDefault();
    this.reset();
    this.remove();
}