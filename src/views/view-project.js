import clearTasks from "../tasks/clear-tasks";
import { loadProjectTask } from "../projects/project-tasks";
import { projectTaskButton } from "../projects/project-tasks";
import { setActiveProject, getActiveProject } from "../projects/project-objects";
import { projectList } from "../projects/project-objects";

export default function loadProjectView() {
    clearTasks();
    projectTaskButton();
    setActiveProject();
    addProjectTasks();
    viewChange(getActiveProject().name);
}

function addProjectTasks() {

    function loadTasks(tasks) {
        tasks.forEach(task => {
            loadProjectTask(task);
        });
    }
    loadTasks(getActiveProject().projectTasks);
}

//update view title
function viewChange(projectName) {
    const viewTitle = document.querySelector('.view-title');
    viewTitle.textContent = `Project: ${projectName}`;
}