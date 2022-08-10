import {format} from 'date-fns';
import clearTasks from "./clear-tasks";
import { taskList } from "./tasks";

export default function tasksToday() {
    // clear task DOM elements
    clearTasks();
    
    //create variable that will always be the current date when the function runs.
    const todaysDate = new Date();
    const formattedDate = format(todaysDate, "yyyy-MM-dd")
    console.log(formattedDate)
    console.log(taskList[0].dueDate)

    const todaysTasks = taskList.filter(task => task.dueDate === formattedDate);

    return {todaysTasks}
}

