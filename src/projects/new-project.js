import { toggleAddBtn } from "../tasks/task-functions";

export default function projectForm() {
    const container = document.querySelector('.container');

    const form = document.createElement('form');
    form.classList.add('project-form');
    form.name = 'project-form';
    form.textContent = 'Add New Project'

    const projectDiv = document.createElement('div');
    const projectLabel = document.createElement('label');
    projectLabel.for = 'project';
    const projectInput = document.createElement('input');
    projectInput.type = 'text'; projectInput.id = 'project'; projectInput.name = 'project'; projectInput.placeholder = 'New Project'; projectInput.required = true; projectInput.maxLength='20';
    projectDiv.appendChild(projectLabel); projectDiv.appendChild(projectInput);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit'; submitBtn.id = 'submit-project-btn';
    submitBtn.textContent = 'Create Project';

    //form.addEventListener("submit", submitProject);// NEED TO CREATE FUNCTION FOR EVENT LISTENER

    form.appendChild(projectDiv); form.appendChild(submitBtn); 
    container.appendChild(form);

    //disable new task button when this form is triggered
    toggleAddBtn();
}