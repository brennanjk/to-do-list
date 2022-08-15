

export {projectList, project, setActiveProject, getActiveProject};

let projectList = []

class project{

    constructor(name) {
        this.name = name;
        this.projectTasks = [];
        this.active = false;
    }
}

function setActiveProject() {
    //ensure no other projects are set as active
    projectList.forEach(project => project.active = false);

    //create a variable for the name of the clicked project
    const projectName = event.target.innerText;

    //find the index of the project in the project list
    const projectIndex = projectList.findIndex(project => project.name === projectName);
    console.log(projectIndex)

    //set the project at the index 'active' key to true
    projectList[projectIndex].active = true;
    console.log(projectList[projectIndex]);
}

function getActiveProject() {
    const activeProject = projectList.find(project => project.active === true);

    return activeProject;
}

