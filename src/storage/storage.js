import { taskList } from '../tasks/task-objects'

export {storeTaskList};

function storeTaskList() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    const storedTaskList = JSON.parse(localStorage.getItem("taskList"));
    console.log(storedTaskList);
}