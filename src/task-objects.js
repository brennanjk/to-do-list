export {taskList, task};

const taskList = [];

class task{

    constructor(description, priority, dueDate) {
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.completed = false;
    };
}

