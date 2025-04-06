const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✔️";
  completeBtn.classList.add("done");
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.classList.add("delete");
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = "";
}

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
