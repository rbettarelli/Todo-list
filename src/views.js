import * as domElement from "./domElements.js";
import * as localStorage from "./localStorage.js";

export const refreshPage = () => {
  domElement.projectList.innerText = "";
  domElement.tasksContainer.innerText = "";

  addProjectTodoModal();
  showProjectList();
};

export const addProjectTodoModal = (e) => {
  localStorage.dbProject.forEach((project) => {
    const selecionProject = document.createElement("option");
    selecionProject.classList.add("project-object");
    selecionProject.innerHTML = project.name;
    selecionProject.value = project.name;
    selecionProject.setAttribute("id", project.id);
    const selecionProjectClone = selecionProject.cloneNode(true);
    domElement.editTaskproject.append(selecionProjectClone);
    domElement.taskproject.append(selecionProject);
  });
};

export const modalDetails = (task) => {
  console.log("modal", task);
  domElement.detailsName.innerText = task.name;
  domElement.detailDescription.innerText = `Description: ${task.description}`;
  domElement.detailDate.innerText = `Date: ${task.date}`;
  domElement.detailPriority.innerText = `Priority: ${task.priority}`;
  domElement.detailProject.innerText = `Project: ${getProjectName(task.project)}`;
};

export const getProjectName = (id) => {
  let projectName;
  for (let i = 0; i < localStorage.dbProject.length; i++) {
    if (localStorage.dbProject[i].id === id) {
      projectName = localStorage.dbProject[i].name;
      break;
    }
  }
  return projectName;
};

export const showTodo = (task) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("todo");
  taskDiv.setAttribute("id", task.id);

  const checkboxDiv = document.createElement("div");
  checkboxDiv.classList.add("todo-check-box");

  const taskTitle = document.createElement("p");
  taskTitle.classList.add("todo-task-title");
  taskTitle.innerText = task.name;

  const taskDetails = document.createElement("button");
  taskDetails.classList.add("todo-task-detail-button", "btn", "btn-secondary");
  taskDetails.setAttribute("data-bs-toggle", "modal");
  taskDetails.setAttribute("data-bs-target", "#details-modal");
  taskDetails.setAttribute("id", task.id);
  taskDetails.innerText = "Details";

  const taskDueDate = document.createElement("p");
  taskDueDate.classList.add("todo-task-due-date");
  let data = new Date(task.date);
  const dateFormat = `${data.getUTCDate().toString().padStart(2, "0")}-${(data.getUTCMonth() + 1).toString().padStart(2, "0")}-${data.getUTCFullYear()}`; // 1988-03-01
  taskDueDate.innerText = dateFormat;
  const taskproject = document.createElement("p");
  taskproject.innerText = getProjectName(task.project) === undefined ? "Inbox" : getProjectName(task.project);

  const taskControllerDiv = document.createElement("div");
  taskControllerDiv.classList.add("task-controller");

  const taskEdit = document.createElement("img");
  taskEdit.src = "../dist/img/edit.svg";
  taskEdit.classList.add("task-edit");
  taskEdit.setAttribute("id", task.id);
  taskEdit.setAttribute("data-bs-toggle", "modal");
  taskEdit.setAttribute("data-bs-target", "#edit-task-modal");

  const taskDeleteSpan = document.createElement("img");
  taskDeleteSpan.src = "../dist/img/delete.svg";
  taskDeleteSpan.classList.add("delete-icon");
  taskDeleteSpan.setAttribute("id", task.id);

  const taskPriority = document.createElement("span");
  taskPriority.innerHTML = '<i class="bi bi-flag-fill"></i> ';
  taskPriority.classList.add("priority-icon");
  const priorityValue = task.priority;

  if (priorityValue === "high") {
    taskPriority.style.color = "red";
  } else if (priorityValue === "low") {
    taskPriority.style.color = "green";
  } else taskPriority.style.color = "yellow";

  const complete = document.createElement("input");
  complete.classList.add("completed-checkbox");
  complete.setAttribute("type", "checkbox");
  complete.setAttribute("id", task.id);

  if (task.completed) {
    complete.checked = true;
    taskDiv.classList.add("completed");
  }

  complete.addEventListener("change", (event) => {
    if (event.target.checked) {
      taskDiv.classList.add("completed");

      task.completed = true;
    } else {
      taskDiv.classList.remove("completed");

      task.completed = false;
    }

    localStorage.updateTaskCompleted(task.id, task.completed);
  });

  complete.addEventListener("change", () => {
    localStorage.countCompletedTasks();
  });

  checkboxDiv.appendChild(complete);

  taskDiv.appendChild(checkboxDiv);
  taskDiv.appendChild(taskTitle);
  taskDiv.appendChild(taskDetails);
  taskDiv.appendChild(taskDueDate);
  taskDiv.appendChild(taskproject);
  taskDiv.appendChild(taskControllerDiv);
  taskControllerDiv.appendChild(taskEdit);
  taskControllerDiv.appendChild(taskDeleteSpan);
  taskControllerDiv.append(taskPriority);

  domElement.tasksContainer.appendChild(taskDiv);
};

export const allTasks = () => {
  domElement.tasksContainer.innerText = "";
  let tasks = localStorage.dbTasks;

  tasks.forEach((task) => {
    showTodo(task);
    console.log(task);
  });
};

export const showProjectList = () => {
  domElement.projectList.innerHTML = "";
  localStorage.dbProject.forEach((project, index) => {
    const projectItemDiv = document.createElement("button");
    const deleteIcon = document.createElement("span");

    projectItemDiv.classList.add("button", "d-flex", "justify-content-between", "project-item-div");

    projectItemDiv.innerText = project.name;
    projectItemDiv.setAttribute("id", project.id);

    deleteIcon.innerHTML = `<i class="bi bi-trash delete-project-icon" id=${index}></i>`;

    domElement.projectList.appendChild(projectItemDiv);

    projectItemDiv.appendChild(deleteIcon);
  });
};

export const changeActive = (id) => {
  const activeElements = document.querySelectorAll(".menu .button.active");
  activeElements.forEach((element) => {
    element.classList.remove("active");
  });
  if (id) id.classList.add("active");
};

export const taskByProject = (id) => {
  domElement.tasksContainer.innerText = "";

  let selectedProject = id;

  let tasks = localStorage.dbTasks;

  let matchingTasks = tasks.filter((task) => task.project === selectedProject);

  matchingTasks.forEach((task) => showTodo(task));
};

export const filterTasksByDate = (date) => {
  domElement.tasksContainer.innerText = "";
  let todayDate = date;
  let tasks = localStorage.dbTasks;

  let matchingTasks = tasks.filter((task) => task.date === todayDate);
  matchingTasks.forEach((task) => {
    showTodo(task);
  });
};

export const FilterTaskByID = (id) => {
  domElement.tasksContainer.innerText = "";

  let tasks = localStorage.dbTasks;

  let matchingTasks = tasks.filter((task) => task.id === id);
  matchingTasks.forEach((task) => {
    modalDetails(task);
    console.log(task);
  });
};

export const completedTasks = () => {
  domElement.tasksContainer.innerText = "";

  let matchingTasks = localStorage.dbTasks.filter((task) => task.completed === true);
  matchingTasks.forEach((task) => {
    showTodo(task);
    console.log(task);
  });
};
