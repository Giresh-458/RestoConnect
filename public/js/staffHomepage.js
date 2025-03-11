function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

function deleteTask(taskId) {
    fetch(`/staff/HomePage/tasks/${taskId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const taskElement = document.getElementById(`task-${taskId}`);
            if (taskElement) {
                taskElement.remove();
            }
        } else {
            alert('Failed to delete task.');
        }
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskName = prompt('Enter the name of the new task:');
    if (taskName) {
        fetch('/staff/HomePage/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: taskName }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const taskList = document.getElementById('task-list');
                const newTask = document.createElement('li');
                newTask.id = `task-${data.task.id}`;
                newTask.innerHTML = `
                    ${data.task.name}
                    <button class="delete-btn" onclick="deleteTask('${data.task.id}')">❌</button>
                `;
                taskList.appendChild(newTask);
            } else {
                alert('Failed to add task.');
            }
        })
        .catch(error => console.error('Error:', error));
    }
});