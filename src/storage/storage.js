import { taskList } from '../task-objects'

export {storeTaskList};

function storeTaskList() {
    sessionStorage.setItem('taskList', JSON.stringify(taskList));
    const sessionTaskList = JSON.parse(sessionStorage.getItem("taskList"));
    console.log(sessionTaskList);
}