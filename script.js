function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskInput.value;
    
    // Add a 'Delete' button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";  // clear the input
}
