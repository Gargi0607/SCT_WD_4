const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // convert date into readable format
    const taskDate = dateInput.value
        ? new Date(dateInput.value).toLocaleString()
        : "No date set";

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // create new list item
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-info">
            <strong>${taskText}</strong><br>
            <small>${taskDate}</small>
        </div>

        <div class="buttons">
            <button class="editBtn">Edit</button>
            <button class="completeBtn">Done</button>
            <button class="deleteBtn">X</button>
        </div>
    `;

    taskList.appendChild(li);

    // clear inputs after adding
    taskInput.value = "";
    dateInput.value = "";

    /* ===== Mark Complete ===== */
    li.querySelector(".completeBtn").addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    /* ===== Delete Task ===== */
    li.querySelector(".deleteBtn").addEventListener("click", function () {
        li.remove();
    });

    /* ===== Edit Task ===== */
    li.querySelector(".editBtn").addEventListener("click", function () {
        let newTask = prompt("Edit task:", li.querySelector("strong").innerText);

        if (newTask && newTask.trim() !== "") {
            li.querySelector("strong").innerText = newTask;
        }
    });

});
