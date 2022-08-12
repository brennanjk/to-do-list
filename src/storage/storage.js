import { taskList } from '../task-objects'

export {storeTaskList};

function storeTaskList() {
    sessionStorage.setItem('taskList',taskList);
    const sessionTaskList = sessionStorage.getItem("taskList");
    console.log(sessionTaskList);
}