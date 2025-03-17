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

let task_taker = document.getElementById('task_taker');
task_taker.remove
task_taker.classList.remove('dispaly_none');

})


let add_task = function(){
    task_taker.classList.add('dispaly_none');
    document.getElementById('task_taker').submit();
}