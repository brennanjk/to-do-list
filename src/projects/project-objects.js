

export {projectList, project, activeProject};

let projectList = []

class project{

    constructor(name) {
        this.name = name;
        this.projectTasks = [];
        this.active = false;
    }
}

function activeProject() {
    console.log(event.target);

    //const projectIndex = projectList.findIndex(project => project.name === this.textContent);
    //console.log(projectIndex)
}