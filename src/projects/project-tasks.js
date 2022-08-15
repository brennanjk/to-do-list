import { task } from "../tasks/task-objects";
import { toggleAddBtn, loadTask } from "../tasks/task-functions";
import { projectList } from "./project-objects";

export {projectTaskButton};

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
        loadTask(newTask);
        console.log(activeProject.projectTasks);
        event.preventDefault();
        this.reset();
        this.remove();

        //re-enable add task button
        toggleAddBtn();
    }
}