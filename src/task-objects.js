export {taskStorageCheck, taskList, task};

let taskList = [];

//check if taskList is saved in session storage
function taskStorageCheck() {
    if (localStorage.getItem('taskList')) {
        const localTaskList = JSON.parse(localStorage.getItem("taskList"));
        taskList = localTaskList;
        console.log(`The task list is ${taskList}`)
    }
}

class task{

    constructor(description, priority, dueDate) {
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.completed = false;
    };
}

