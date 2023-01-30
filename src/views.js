import * as domElement from "./domElements.js";
import * as localStorage from "./localStorage.js";

export const refreshPage = () => {
  domElement.projectList.innerText = "";
  domElement.tasksContainer.innerText = "";
  taskByProject();
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
    domElement.taskproject.appendChild(selecionProject);
  });
};

export const modalDetails = (task) => {
  console.log("modal", task);
  domElement.detailsName.innerText = task.name;
  domElement.detailDescription.innerText = `Description: ${task.descriprion}`;
  domElement.detailDate.innerText = `Date: ${task.date}`;
  domElement.detailPriority.innerText = `Priority: ${task.priority}`;
  domElement.detailProject.innerText = `Project: ${getProjectName(task.project)}`;
};

function getProjectName(id) {
  let projectName;
  for (let i = 0; i < localStorage.dbProject.length; i++) {
    if (localStorage.dbProject[i].id === id) {
      projectName = localStorage.dbProject[i].name;
      break;
    }
  }
  return projectName;
}

export const showTodo = (task, index) => {
  const taskDiv = document.createElement("div");

  taskDiv.classList.add("todo");
  taskDiv.id = index;

  const complete = document.createElement("input");
  complete.setAttribute("type", "checkbox");
  complete.classList.add("todo-check-box");
  complete.addEventListener("change", (event) => {
    if (event.target.checked) {
      taskDiv.classList.add("completed");
    } else {
      taskDiv.classList.remove("completed");
    }
  });

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
  taskDueDate.innerText = task.date;

  const taskproject = document.createElement("p");
  taskproject.innerText = getProjectName(task.project);

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
  taskPriority.innerHTML = '<i class="bi bi-bell-fill"></i> ';
  taskPriority.classList.add("priority-icon");
  const priorityValue = task.priority;

  if (priorityValue === "high") {
    taskPriority.style.color = "red";
  } else if (priorityValue === "low") {
    taskPriority.style.color = "green";
  } else taskPriority.style.color = "yellow";

  taskDiv.appendChild(complete);
  taskDiv.appendChild(taskTitle);
  taskDiv.appendChild(taskDetails);
  taskDiv.appendChild(taskDueDate);
  taskDiv.appendChild(taskproject);
  taskControllerDiv.appendChild(taskEdit);
  taskControllerDiv.appendChild(taskDeleteSpan);
  taskControllerDiv.append(taskPriority);
  taskDiv.appendChild(taskControllerDiv);
  domElement.tasksContainer.appendChild(taskDiv);
};

export const showProjectList = () => {
  localStorage.dbProject.forEach((project, index) => {
    const projectItemDiv = document.createElement("button");
    const deleteIcon = document.createElement("span");

    projectItemDiv.classList.add("button", "d-flex", "justify-content-between", "project-item-div");

    //project name
    projectItemDiv.innerText = project.name;
    projectItemDiv.setAttribute("id", project.id);

    //trash icon
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
