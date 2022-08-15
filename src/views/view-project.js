import clearTasks from "../tasks/clear-tasks";
import { projectTaskButton } from "../projects/project-tasks";
import { activeProject } from "../projects/project-objects";

export default function loadProjectView() {
    clearTasks();
    projectTaskButton();
    activeProject();
}