export {taskStorageCheck, taskList, task};

let taskList = [];

//check if taskList is saved in session storage
function taskStorageCheck() {
    if (sessionStorage.getItem('taskList')) {
        const sessionTaskList = JSON.parse(sessionStorage.getItem("taskList"));
        taskList = sessionTaskList;
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

