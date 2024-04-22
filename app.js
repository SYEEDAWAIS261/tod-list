function addTask() {
    const input = document.querySelector('.input');
    const newTask = input.value.trim();

    if (newTask !== "") {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = newTask;

        // Add delete button for the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            listItem.remove();
        };
        listItem.appendChild(deleteBtn);
        // Append the new task to the list
        document.querySelector('.taskList').appendChild(listItem);

        // Clear the input
        input.value = "";
    }
}

document.getElementById('.input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


