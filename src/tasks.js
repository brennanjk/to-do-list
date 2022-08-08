
function taskForm() {
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

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit'; submitBtn.id = 'submit-btn';
    submitBtn.textContent = 'Create Task';

    form.addEventListener("submit", submitTask);

    form.appendChild(taskDiv); form.appendChild(prioDiv); form.appendChild(submitBtn);
    container.appendChild(form);
}

const taskList = [];

class task{

    constructor(description, priority) {
        this.description = description;
        this.priority = priority;
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
    const taskText = document.createElement('div');
    taskText.textContent = `${newTask.description}`;
    const taskPriority = document.createElement('div');
    taskPriority.textContent = `${newTask.priority}`;
    taskPriority.classList.add(`${newTask.priority}`);
    taskPriority.classList.add('priority');
    const taskDelete = document.createElement('button');
    taskDelete.classList.add('task-delete');
    taskDelete.textContent = 'X';
    //append objects to task li element
    task.appendChild(taskCheck);
    task.appendChild(taskText);
    task.appendChild(taskPriority);
    task.appendChild(taskDelete);

    //append new task to the taskList
    const tasks = document.querySelector('.task-list');
    tasks.appendChild(task);
}

function submitTask(event) {
    const description = document.querySelector('[name="task"]').value;
    const priority = document.querySelector('[name="Priority"]').value;
    const newTask = new task(description, priority);

    addTask(newTask);
    console.log(taskList);
    event.preventDefault();
    this.reset();
    this.remove();
}

export default taskForm;