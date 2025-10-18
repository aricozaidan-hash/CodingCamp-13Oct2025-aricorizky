
let tasksDb = [];

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('todo-date');

    if (validateInput(taskInput.value, taskDate.value)) {        /// Create Task Object
        const newTask = {
            task: taskInput.value,
            date: taskDate.value,
        }
        tasksDb.push(newTask);

        renderTasks();
    }
}

function renderTasks() {
    
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    if (tasksDb.length === 0) {
        taskList.innerHTML = 'No tasks added';
    } else {
        tasksDb.forEach((taskObj, index) => {
            taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}</li>`;
        });
    }
}

function deleteAllTasks() {
    /// Clear Database
    tasksDb = [];

    
    renderTasks();
}


function filterTasks() {
    
}


function validateInput(task, date) {
    /// Simple Validation
    if (task.trim() === '' || date.trim() === '') {
        alert('Please enter both task and due date.');
        return false;
    }
    return true;
}