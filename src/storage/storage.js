import { taskList } from '../tasks/task-objects'
import { projectList } from '../projects/project-objects';

export {storeTaskList, storeProjectList};

function storeTaskList() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    const storedTaskList = JSON.parse(localStorage.getItem("taskList"));
    console.log(storedTaskList);
}

function storeProjectList() {
    localStorage.setItem('projectList', JSON.stringify(projectList));
    const storedProjectList = JSON.parse(localStorage.getItem("projectList"));
    console.log(storedProjectList);
}