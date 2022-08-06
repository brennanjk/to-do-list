
function taskForm() {
    const container = document.querySelector('.container');

    const form = document.createElement('form');
    form.classList.add('task-form');
    form.name = 'task-form';
    form.textContent = 'Add New Task'

    const taskDiv = document.createElement('div');
    const taskLabel = document.createElement('label');
    taskLabel.for = 'task';
    const taskInput = document.createElement('input');
    taskInput.type = 'text'; taskInput.id = 'task'; taskInput.name = 'task'; taskInput.placeholder = 'Task Description'; taskInput.required; taskInput.maxLength='40';
    taskDiv.appendChild(taskLabel); taskDiv.appendChild(taskInput);

    const prioDiv = document.createElement('div');
    const prioSelect = document.createElement('select');
    prioSelect.name = 'Priority';
    const option1 = document.createElement('option');
    option1.value = 'low';
    option1.textContent = 'Low';
    const option2 = document.createElement('option');
    option2.value = 'medium';
    option2.textContent = 'medium';
    const option3 = document.createElement('option');
    option3.value = 'high';
    option3.textContent = 'High';
    prioDiv.appendChild(prioSelect);
    prioSelect.appendChild(option1); prioSelect.appendChild(option2); prioSelect.appendChild(option3);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit'; submitBtn.id = 'submit-btn';
    submitBtn.textContent = 'Create Task';

    form.appendChild(taskDiv); form.appendChild(prioDiv); form.appendChild(submitBtn);
    container.appendChild(form);
}

export default taskForm;