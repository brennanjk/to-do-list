import clearTasks from "../tasks/clear-tasks";
import { projectTaskButton } from "../projects/project-tasks";

export default function loadProjectView() {
    clearTasks();
    projectTaskButton();
}