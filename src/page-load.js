import { taskStorageCheck } from "./task-objects";
import loadTasks from "./views/view-all";

const content = document.getElementById('content');

function createHeader() {

    const header = document.createElement('div');
    header.classList.add('header');
    const headerText = document.createElement('div');
    headerText.textContent = 'Task Master';
    const image = document.createElement('img');
    image.src = './images/check.svg'; image.alt = 'Task Manager';

    header.appendChild(headerText);
    header.appendChild(image);
    content.appendChild(header);
}

function createNav() {
    // create nav bar div
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    //create ul and list items
    const ul = document.createElement('ul');

    const item1 = document.createElement('li');
    item1.classList.add('nav-item');
    item1.classList.add('nav-tasks');
    const image1 = document.createElement('img');
    image1.src = './images/tasks.svg'; image1.alt = 'tasks';
    const item1Text = document.createElement('div');
    item1Text.textContent = 'Tasks';
    item1.appendChild(image1);
    item1.appendChild(item1Text);

    const item2 = document.createElement('li');
    item2.classList.add('nav-item');
    item2.classList.add('nav-today');
    const image2 = document.createElement('img');
    image2.src = './images/date2.svg'; image2.alt = "today's tasks";
    const item2Text = document.createElement('div');
    item2Text.textContent = 'Today';
    item2.appendChild(image2);
    item2.appendChild(item2Text);

    const item3 = document.createElement('li');
    item3.classList.add('nav-item');
    item3.classList.add('nav-week');
    const image3 = document.createElement('img');
    image3.src = './images/calendar.svg'; image3.alt = "this week's tasks";
    const item3Text = document.createElement('div');
    item3Text.textContent = 'This Week';
    item3.appendChild(image3);
    item3.appendChild(item3Text);

    //append items to the ul, the ul to the navbar, and the navbar to content
    ul.appendChild(item1);
    ul.appendChild(item2);
    ul.appendChild(item3);
    navBar.appendChild(ul);
    content.appendChild(navBar);
}

function createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    const taskList = document.createElement('ul');
    taskList.classList.add('task-list');

    //Static task for testing purposes
    const testTask = document.createElement('li');
    testTask.classList.add('task');
    const taskCheck = document.createElement('input');
    taskCheck.classList.add('task-check');
    taskCheck.setAttribute('type','checkbox');
    const taskText = document.createElement('div');
    taskText.textContent = 'Test Task';
    const taskPriority = document.createElement('div');
    taskPriority.textContent = 'Low';
    taskPriority.classList.add('low');
    taskPriority.classList.add('priority');
    const taskDelete = document.createElement('button');
    taskDelete.classList.add('task-delete');
    taskDelete.textContent = 'X'

    //button to add new tasks
    const btn = document.createElement('button');
    btn.classList.add('add-task-btn');
    btn.textContent = '+';
    
    testTask.appendChild(taskCheck);
    testTask.appendChild(taskText);
    testTask.appendChild(taskPriority);
    testTask.appendChild(taskDelete);
    taskList.appendChild(testTask);
    container.appendChild(taskList);
    container.appendChild(btn);
    content.appendChild(container);
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const icon = document.createElement('img');
    icon.src = './images/github-icon.svg'; icon.alt = 'github icon';
    const footText = document.createElement('div');
    footText.innerHTML = '&copy brennanjk';

    footer.appendChild(icon);
    footer.appendChild(footText);
    content.appendChild(footer);
}

function loadPage() {
    //Load DOM elements
    createHeader();
    createNav();
    createContainer();
    createFooter();

    //Update task list if storage is available, then loadtasks so they populate at page load if available
    taskStorageCheck();
    loadTasks();
}

export default loadPage;