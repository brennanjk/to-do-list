import clearTasks from "../tasks/clear-tasks";
import { loadProjectTask } from "../projects/project-tasks";
import { projectTaskButton } from "../projects/project-tasks";
import { activeProject } from "../projects/project-objects";
import { projectList } from "../projects/project-objects";

export default function loadProjectView() {
    clearTasks();
    projectTaskButton();
    activeProject();
    addProjectTasks();
}

function addProjectTasks() {
    //find active project
    const activeProject = projectList.find(project => project.active === true);

    function loadTasks(tasks) {
        tasks.forEach(task => {
            loadProjectTask(task);
        });
    }
    loadTasks(activeProject.projectTasks);
}