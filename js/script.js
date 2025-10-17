

let tasksDb = [];

function addTask() {
    const taskInput = document.getElementById('todo-Input');
    const taskDate = document.getElementById('todo-date');

    console.log(taskInput.value);
    console.log(taskDate.value);
    
    if (validateInput(taskInput.value, taskDate.value)) {
        const newTask = {
            task: taskInput.value,
            date: taskDate.value,
        };
        tasksDb.push(newTask);

        console.log(tasksDb);
        renderTasks();
    }
};

function renderTasks() {
    const tasksList = document.getElementById('taskslist');
    tasksList.innerHTML = '';

    tasksDb.forEach((taskObj, index) => {
        const taskItem = document.createElement('div');
        tasksList.innerHTML += `li ${taskObj.task} - ${taskObj.date} <button onclick="deleteTask(${index})">Delete</button></li>`;

        
    });
}




function deleteTask() {

}

function filterTasks() {

}


function validateInput(task, date) {
    if (task.trim() === '') {
        alert('Task cannot be empty');
        return false;
    }

    if (date.trim() === '') {
        alert('Date cannot be empty');
        return false;
    }
    return true;
}