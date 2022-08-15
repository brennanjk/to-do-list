import clearTasks from "../tasks/clear-tasks";
import { loadTask } from "../tasks/task-functions";
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
            loadTask(task);
        });
    }
    loadTasks(activeProject.projectTasks);
}