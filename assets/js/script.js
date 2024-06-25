// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Create a function to generate a unique task id
function generateTaskId() {
    return nextId++;
}

// Create a function to create a task card
function createTaskCard(task) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card', 'card', 'mb-3');
    taskCard.setAttribute('data-task-id', task.id);
    taskCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">Due: ${task.dueDate}</p>
            <p class="card-text">${task.description}</p>
            <button class="btn btn-danger delete-task" data-task-id="${task.id}">Delete</button>
        </div>
    `;
    return taskCard;
}

// Create a function to render the task list and make cards draggable
function renderTaskList() {
    const todoContainer = document.getElementById('todo-cards');
    const inProgressContainer = document.getElementById('in-progress-cards');
    const doneContainer = document.getElementById('done-cards');

    todoContainer.innerHTML = '';
    inProgressContainer.innerHTML = '';
    doneContainer.innerHTML = '';

    taskList.forEach(task => {
        const taskCard = createTaskCard(task);
        if (task.status === 'to-do') {
            todoContainer.appendChild(taskCard);
        } else if (task.status === 'in-progress') {
            inProgressContainer.appendChild(taskCard);
        } else if (task.status === 'done') {
            doneContainer.appendChild(taskCard);
        }
    });

    // Make task cards draggable
    $('.task-card').draggable({
        revert: 'invalid',
        helper: 'clone',
        start: function(event, ui) {
            $(ui.helper).addClass('ui-draggable-helper');
        }
    });
}

// Create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const description = document.getElementById('taskDescription').value;

    const newTask = {
        id: generateTaskId(),
        title,
        dueDate,
        description,
        status: 'to-do'
    };

    taskList.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    localStorage.setItem('nextId', JSON.stringify(nextId));

    renderTaskList();
    $('#formModal').modal('hide');
    document.getElementById('taskForm').reset();
}

// Create a function to handle deleting a task
function handleDeleteTask(event){
    const taskId = parseInt(event.target.getAttribute('data-task-id'));
    taskList = taskList.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTaskList();
}

// Create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = parseInt(ui.draggable.attr('data-task-id'));
    const newStatus = event.target.getAttribute('id').replace('-cards', '');
    const task = taskList.find(task => task.id === taskId);
    task.status = newStatus;
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTaskList();
}

// When the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();

    $('#taskForm').on('submit', handleAddTask);
    $(document).on('click', '.delete-task', handleDeleteTask);

    $('.lane').droppable({
        accept: '.task-card',
        drop: handleDrop
    });
});