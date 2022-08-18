import { toggleAddBtn } from "../tasks/task-functions";
import { projectList, project } from "./project-objects";
import loadProjectView from "../views/view-project";
import { storeProjectList } from "../storage/storage";

export { loadAllProjects };

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
    projectInput.type = 'text'; projectInput.id = 'project'; projectInput.name = 'project'; projectInput.placeholder = 'New Project'; projectInput.required = true; projectInput.maxLength='17';
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

    if (!projectList[0]) {
        addProject(newProject);
        console.log(projectList);
        loadProject(newProject);

        //prevent submit button from refreshing the page; clear content and remove form
        event.preventDefault();
        this.reset();
        this.remove();

        //toggle add task button back on
        toggleAddBtn();
    }
    else {
        const duplicateCheck = projectList.find(project => project.name === name);
        if(duplicateCheck) {
            alert('Project name already exists. Please enter a different name');
            event.preventDefault();
        } else {
            event.preventDefault();
            addProject(newProject);
            console.log(projectList);
            loadProject(newProject);
            //prevent submit button from refreshing the page; clear content and remove form
            event.preventDefault();
            this.reset();
            this.remove();
            //toggle add task button back on
            toggleAddBtn();

        }
    }
}

function addProject(newProject) {
    projectList.push(newProject);
    storeProjectList();
}

function loadProject(newProject) {
    const projectNavList = document.querySelector('.projects-nav-list');

    const project = document.createElement('li');
    project.classList.add('project');
    const projectName = document.createElement ('div');
    projectName.classList.add('project-name');
    projectName.textContent = newProject.name;
    const projectDel = document.createElement('button');
    projectDel.classList.add('del-project-btn');
    projectDel.textContent = 'x';

    //append elements to Dom
    project.appendChild(projectName);
    project.appendChild(projectDel);
    projectNavList.appendChild(project);

    //add event listeners: so clicking on the project loads that projects view/tasks, and clicking the delete button deletes the project
    projectName.addEventListener('click', loadProjectView);
    projectDel.addEventListener('click', delProject);
}

//function to load all projects when there are existing projects saved in local storage
function loadAllProjects() {
    const projectNavList = document.querySelector('.projects-nav-list');

    projectList.forEach(project => {
        loadProject(project)});        
}

//function to delete a project that we'll add to the projects delete button upon creation
function delProject() {
    //find delete buttons project name sibling
    const projectName = this.parentNode.querySelector('.project-name');

    //find the index of the related projectList array object, and remove it, then update the project storage
    const projectIndex = projectList.findIndex(project => project.name === projectName.textContent)
    projectList.splice(projectIndex, 1);
    storeProjectList();

    //remove the project element from the DOM
    this.parentNode.remove();
}