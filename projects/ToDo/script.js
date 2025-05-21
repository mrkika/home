document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const prioritySelect = document.getElementById("priority-select");
    const dueDateInput = document.getElementById("due-date-input"); // New input for due date
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        const taskItems = document.querySelectorAll("#task-list li");
        taskItems.forEach(item => {
            const taskText = item.querySelector("span.task-text").textContent;
            const priority = item.classList[0]; // Getting the priority class
            const completed = item.classList.contains("completed");
            const dueDate = item.querySelector(".due-date").textContent; // Get due date text
            tasks.push({ taskText, priority, completed, dueDate });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to load tasks from localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            tasks.forEach(task => {
                const li = document.createElement("li");
                li.classList.add(task.priority);
                if (task.completed) {
                    li.classList.add("completed");
                }
                li.innerHTML = `<span class="task-text">${task.taskText}</span> <span class="priority">${task.priority}</span> <span class="due-date">${task.dueDate}</span> <button class="delete-btn">X</button>`;
                
                // Add event listener to mark task as completed
                li.addEventListener("click", function() {
                    li.classList.toggle("completed");
                    saveTasks(); // Save tasks after modifying
                });

                // Add event listener to delete button
                li.querySelector(".delete-btn").addEventListener("click", function() {
                    li.remove();
                    saveTasks(); // Save tasks after deleting
                });

                // Add event listener to edit task on double-click
                li.addEventListener("dblclick", function() {
                    editTask(li);
                });

                taskList.appendChild(li);
            });
        }
    }

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;
        const dueDate = dueDateInput.value; // Get due date from the input

        // Check if the task text or due date is empty
        if (taskText === "" || dueDate === "") {
            alert("Please enter a task and due date.");
            return;
        }

        // Create a new list item for the task
        const li = document.createElement("li");
        li.classList.add(priority);
        li.innerHTML = `<span class="task-text">${taskText}</span> <span class="priority">${priority}</span> <span class="due-date">${dueDate}</span> <button class="delete-btn">X</button>`;

        // Mark task as completed when clicked
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
            saveTasks(); // Save tasks after modifying
        });

        // Add event listener to delete button
        li.querySelector(".delete-btn").addEventListener("click", function() {
            li.remove();
            saveTasks(); // Save tasks after deleting
        });

        // Add event listener to edit task on double-click
        li.addEventListener("dblclick", function() {
            editTask(li);
        });

        taskList.appendChild(li);

        // Save tasks to localStorage after adding the task
        saveTasks();

        // Clear the input fields after adding the task
        taskInput.value = "";
        dueDateInput.value = "";
    }

    // Event listener for "Add" button
    addTaskBtn.addEventListener("click", function() {
        addTask();
    });

    // Event listener for "Enter" key
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Function to edit a task
    function editTask(li) {
        const taskText = li.querySelector("span.task-text");
        const currentText = taskText.textContent;
        const currentPriority = li.classList[0]; // Get current priority
        const currentDueDate = li.querySelector(".due-date").textContent; // Get current due date

        // Prompt for new task name, priority, and due date
        const newText = prompt("Edit your task:", currentText);
        if (newText !== null && newText.trim() !== "") {
            taskText.textContent = newText.trim(); // Update task text
        }

        const newPriority = prompt("Edit priority (low, medium, high):", currentPriority);
        if (newPriority && ["low", "medium", "high"].includes(newPriority.toLowerCase())) {
            li.classList.remove(currentPriority); // Remove old priority
            li.classList.add(newPriority.toLowerCase()); // Add new priority
        }

        const newDueDate = prompt("Edit due date:", currentDueDate);
        if (newDueDate !== null && newDueDate.trim() !== "") {
            li.querySelector(".due-date").textContent = newDueDate.trim(); // Update due date
        }

        // Save the updated task in localStorage
        saveTasks();
    }

    // Load tasks from localStorage on page load
    loadTasks();

    // Event listener to clear completed tasks
    document.getElementById("clear-completed-btn").addEventListener("click", function() {
        const completedTasks = document.querySelectorAll("#task-list li.completed");
        completedTasks.forEach(task => {
            task.remove();
        });
        saveTasks(); // Save the updated task list after clearing completed tasks
    });

    // Function to filter tasks based on search input
    document.getElementById("search-input").addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase();
        const tasks = document.querySelectorAll("#task-list li");

        tasks.forEach(task => {
            const taskText = task.querySelector(".task-text").textContent.toLowerCase();
            if (taskText.includes(searchTerm)) {
                task.style.display = "flex";  // Show task if it matches search term
            } else {
                task.style.display = "none";  // Hide task if it doesn't match
            }
        });
    });

    // Function to sort tasks by priority or name
    document.getElementById("sort-dropdown").addEventListener("change", function() {
        const sortValue = this.value;
        const taskList = document.getElementById("task-list");
        const tasks = Array.from(taskList.children);

        if (sortValue === "priority") {
            tasks.sort((a, b) => {
                const priorityA = a.classList[0];
                const priorityB = b.classList[0];
                const priorityOrder = ["low", "medium", "high"];
                return priorityOrder.indexOf(priorityA) - priorityOrder.indexOf(priorityB);
            });
        } else if (sortValue === "name") {
            tasks.sort((a, b) => {
                const taskTextA = a.querySelector(".task-text").textContent.toLowerCase();
                const taskTextB = b.querySelector(".task-text").textContent.toLowerCase();
                return taskTextA.localeCompare(taskTextB);
            });
        }

        // Append the sorted tasks back to the task list
        tasks.forEach(task => {
            taskList.appendChild(task);
        });
    });
});