import * as domElement from "./domElements.js";
import * as localStorage from "./localStorage.js";
import * as views from "./views.js";

// take option id to save on task project
let selectedOptionId;
let editIdTask;
let selectedOptionValue;

const select1 = document.getElementById("edit-task-project");
const select2 = document.getElementById("task-project");
const Select3 = document.getElementById("task-priority");
const select4 = document.getElementById("edit-task-priority");
const todayTask = document.getElementById("today-task-button");

const handleSelectChangeProject = function () {
  let selectedIndex = this.selectedIndex;
  let selectedOption = this.options[selectedIndex];
  selectedOptionId = selectedOption.id;
  editIdTask = selectedOptionId;
  return editIdTask;
};

const handleSelectChangePrioriry = function () {
  let selectedIndex = this.selectedIndex;
  let selectedOption = this.options[selectedIndex];
  selectedOptionValue = selectedOption.value;
};

select1.addEventListener("change", handleSelectChangeProject);
select2.addEventListener("change", handleSelectChangeProject);
Select3.addEventListener("change", handleSelectChangePrioriry);
select4.addEventListener("change", handleSelectChangePrioriry);

document.addEventListener("click", (e) => {
  views.changeActive(e.target);

  if (e.target.classList.contains("delete-project-icon")) {
    const index = e.target.id;
    localStorage.deleteProject(index);
  }

  if (e.target.classList.contains("button")) {
    domElement.projectNameLabel.innerText = e.target.innerText;
    domElement.projectNameLabel.setAttribute("id", e.target.id);
    console.log(e.target.id);
    views.taskByProject(e.target.id);
  }

  if (e.target.classList.contains("today-task-button")) {
    let today = new Date();
    let dateString = today.toLocaleDateString().split("/").reverse().join("-");
    views.filterTasksByDate(dateString);
  }

  if (e.target.classList.contains("delete-icon")) {
    const projectTarget = domElement.projectNameLabel.getAttribute("id");
    localStorage.deletetask(e.target.id);
    views.taskByProject(projectTarget);
  }

  if(e.target.classList.contains('todo-task-detail-button')) {
    
    views.FilterTaskByID(e.target.id)
  

  }

  if (e.target.classList.contains("task-edit")) {
    const id = e.target.id;
    editIdTask = e.target.id;
    console.log(id);
    let array = localStorage.dbTasks;

    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        let task = array[i];
        // aqui você pode usar os dados do objeto encontrado para preencher o formulário
        domElement.edittaskName.value = task.name;
        domElement.editTaskDescription.value = task.description;
        domElement.editTaskDate.value = task.date;
        domElement.editTaskPriority.value = task.priority;
        domElement.editTaskproject.value = task.project;
        break;
      }
    }
  }
});

domElement.addProjectForm.addEventListener("submit", () => {
  localStorage.createProject(domElement.projectName.value);
  domElement.addProjectForm.reset();
});

domElement.addTaskForm.addEventListener("submit", () => {
  localStorage.createTask(domElement.taskName.value, domElement.taskDescription.value, domElement.taskDate.value, selectedOptionValue, selectedOptionId);
  domElement.addTaskForm.reset();
});

domElement.edittaskForm.addEventListener("submit", () => {
  const id = editIdTask;
  const task = {
    name: domElement.edittaskName.value,
    description: domElement.editTaskDescription.value,
    date: domElement.editTaskDate.value,
    priority: domElement.editTaskPriority.value,
    project: selectedOptionId,
  };

  localStorage.editTask(id, task);
  domElement.edittaskForm.reset();
});

views.addProjectTodoModal();
views.showProjectList();

