import { toggleAddBtn } from "../tasks/task-functions";
import { projectList, project } from "./project-objects";

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

    form.addEventListener("submit", submitProject);

    form.appendChild(projectDiv); form.appendChild(submitBtn); 
    container.appendChild(form);

    //disable new task button when this form is triggered
    toggleAddBtn();
}

function submitProject(event) {
    const name = document.querySelector('[name="project"]').value;

    const newProject = new project(name);
    addProject(newProject);
    console.log(projectList);
    loadProject(newProject);

    //prevent submit button from refreshing the page; clear content and remove form
    event.preventDefault();
    this.reset();
    this.remove();
}

function addProject(newProject) {
    projectList.push(newProject);
}

function loadProject(newProject) {
    const projectNavList = document.querySelector('.projects-nav-list');

    const project = document.createElement('li');
    project.classList.add('project');
    project.textContent = newProject.name;

    //append elements to Dom
    projectNavList.appendChild(project);
}