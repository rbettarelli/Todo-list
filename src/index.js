import * as domElement from "./domElements.js";
import * as localStorage from "./localStorage.js";
import * as views from "./views.js";

let selectedOptionId;
let editIdTask;
let selectedOptionValue = "low";

const handleSelectChangeProject = function () {
  let selectedIndex = this.selectedIndex;
  let selectedOption = this.options[selectedIndex];
  let selectedOptionId = selectedOption.getAttribute("id");
  return selectedOptionId;
};

const handleSelectChangePrioriry = function () {
  let selectedIndex = this.selectedIndex;
  let selectedOption = this.options[selectedIndex];
  selectedOptionValue = selectedOption.value;
};

domElement.taskProjectSelection.addEventListener("change", function () {
  selectedOptionId = handleSelectChangeProject.call(this);
});

domElement.editTaskProjectSelection.addEventListener("change", function () {
  selectedOptionId = handleSelectChangeProject.call(this);
});

domElement.editTaskPrioritySelection.addEventListener(
  "change",
  handleSelectChangePrioriry
);
domElement.taskPrioritySelection.addEventListener(
  "change",
  handleSelectChangePrioriry
);

document.addEventListener("click", async (e) => {
  views.changeActive(e.target);

  if (e.target.classList.contains("delete-project-icon")) {
    const index = e.target.id;
    localStorage.deleteProject(index);
  }

  if (e.target.classList.contains("button")) {
    if (e.target.id == "inboxx") {
      domElement.projectNameLabel.innerText = "Inbox";
      views.allTasks();
    } else {
      domElement.projectNameLabel.innerText = e.target.innerText;
      domElement.projectNameLabel.setAttribute("id", e.target.id);
      console.log(e.target.id);
      views.taskByProject(e.target.id);
    }
  }

  if (e.target.classList.contains("today-task-button")) {
    let today = new Date();
    let dateString = today.toLocaleDateString().split("/").reverse().join("-");
    views.filterTasksByDate(dateString);
  }

  if (e.target.id == "tasks-completed") {
    domElement.projectNameLabel.innerText = "Tasks Completed";
    views.completedTasks();

    document.querySelector('input[type="checkbox"]').disabled = true;
  }

  if (e.target.classList.contains("delete-icon")) {
    const projectTarget = domElement.projectNameLabel.getAttribute("id");
    localStorage.deletetask(e.target.id);
    views.taskByProject(projectTarget);
  }

  if (e.target.classList.contains("todo-task-detail-button")) {
    views.FilterTaskByID(e.target.id);
  }
  if (e.target.classList.contains("task-edit")) {
    const id = e.target.id;
    editIdTask = e.target.id;

    let array = await localStorage.dbTasks();

    for (let i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        let task = array[i];

        domElement.edittaskName.value = task.title;
        domElement.editTaskDescription.value = task.description;
        domElement.editTaskDate.value = task.formattedDueDate;
        domElement.editTaskPriority.value = task.priority;
        const selectedProject = Array.from(
          domElement.editTaskproject.options
        ).find((option) => option.id == task.project);
        selectedProject.selected = true;
        domElement.editTaskproject.value = selectedProject.value;

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
  localStorage.createTask(
    domElement.taskName.value,
    domElement.taskDescription.value,
    domElement.taskDate.value,
    selectedOptionValue,
    selectedOptionId
  );

  domElement.addTaskForm.reset();
  views.taskByProject(selectedOptionId);
});

domElement.edittaskForm.addEventListener("submit", () => {
  const id = editIdTask;
  console.log(editIdTask, "edit id task", id);
  const task = {
    id: editIdTask,
    title: domElement.edittaskName.value,
    description: domElement.editTaskDescription.value,
    formattedDueDate: domElement.editTaskDate.value,
    priority: domElement.editTaskPriority.value,
    project: selectedOptionId,
  };

  localStorage.editTask(task);
  domElement.edittaskForm.reset();

  if (domElement.projectNameLabel.innerText == "Inbox") {
    views.allTasks();
    console.log(selectedOptionId);
  } else {
    views.taskByProject(selectedOptionId);
  }
});

views.addProjectTodoModal();
views.showProjectList();
views.allTasks();

console.log(localStorage.countCompletedTasks());
