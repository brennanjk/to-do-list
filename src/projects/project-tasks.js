import { format } from "date-fns";
import { task } from "../tasks/task-objects";
import { toggleAddBtn } from "../tasks/task-functions";
import { projectList } from "./project-objects";

export {projectTaskButton, loadProjectTask};

function projectTaskButton() {
    //check if default add task button is in the DOM, and if so remove it and add the project task button

    if (document.querySelector('.add-task-btn')) {
        //remove existing add task button
        const taskBtn = document.querySelector('.add-task-btn');
        taskBtn.remove();

        //create and add new project task button
        const btn = document.createElement('button');
        btn.classList.add('add-project-task-btn');
        btn.textContent = '+';
        btn.addEventListener('click', projectTaskForm);

        //append new button to DOM
        const container = document.querySelector('.container');
        container.appendChild(btn);
    }
}

function projectTaskForm() {
    const container = document.querySelector('.container');

    const form = document.createElement('form');
    form.classList.add('task-form');
    form.name = 'task-form';
    form.textContent = 'Add Project Task'

    const taskDiv = document.createElement('div');
    const taskLabel = document.createElement('label');
    taskLabel.for = 'project-task';
    const taskInput = document.createElement('input');
    taskInput.type = 'text'; taskInput.id = 'project-task'; taskInput.name = 'project-task'; taskInput.placeholder = 'Task Description'; taskInput.required = true; taskInput.maxLength='40';
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

function loadProjectTask(task) {

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

        //Find Active project
        const activeProject = projectList.find(project => project.active === true);
        //Find task in active project projectTasks array and remove it
        const taskIndex = activeProject.projectTasks.findIndex(task => task.description === descriptor.textContent);
        activeProject.projectTasks.splice(taskIndex, 1);
        //update session storage tasklist
        //storeTaskList();

        //remove the HTML element from the DOM
        this.parentNode.remove();
    }

    function toggleTask() {
        //Create variable for the parent element of the checked box
        const checkParent = this.parentNode;
        //create variable for task name
        const descriptor = this.parentNode.querySelector('.description');
        //find active task
        const activeProject = projectList.find(project => project.active === true);

        if (this.checked) {
            checkParent.classList.add('completed');
            //change completed key value to 'true' for related taskList object
            const taskIndex = activeProject.projectTasks.findIndex(task => task.description === descriptor.textContent);
            activeProject.projectTasks[taskIndex].completed = true;
            console.log(activeProject.projectTasks[taskIndex].completed);
            //update stored taskList
            //storeTaskList();
        }
        else {
            checkParent.classList.remove('completed');
            //change completed key value to 'false' for related taskList object
            const taskIndex = activeProject.projectTasks.findIndex(task => task.description === descriptor.textContent);
            activeProject.projectTasks[taskIndex].completed = false;
            console.log(taskList[taskIndex].completed);
            //update stored taskList
            //storeTaskList();
        }
    }
    addTask(task);
}

//Function to trigger on projectTaskForm submit
function submitTask(event) {

    const description = document.querySelector('[name="project-task"]').value;
    const priority = document.querySelector('[name="Priority"]').value;
    const dueDate = document.querySelector('[name="due-date"]').value;
    const newTask = new task(description, priority, dueDate);
    console.log(newTask);

    //find active project
    const activeProject = projectList.find(project => project.active === true);
    console.log(activeProject);

    //check if a task with this description already exists
    const duplicateCheck = activeProject.projectTasks.find(task => task.description === description);
    if (duplicateCheck) {
        alert("A task with that name already exists. Please enter a different name");
        event.preventDefault();
    }
    else {
        activeProject.projectTasks.push(newTask);
        loadProjectTask(newTask);
        console.log(activeProject.projectTasks);
        event.preventDefault();
        this.reset();
        this.remove();

        //re-enable add task button
        toggleAddBtn();
    }
}