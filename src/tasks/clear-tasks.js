export default function clearTasks() {
    const taskContainer = document.querySelector('.task-list');

    while (taskContainer.firstChild) {
        taskContainer.firstChild.remove();
    }
}