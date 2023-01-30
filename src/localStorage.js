import Project from "./projects";
import Tasks from "./tasks";
import * as view from "./views.js";

export const dbProject = JSON.parse(localStorage.getItem("dbProject")) ?? [];
export const setDbProject = () => {
  localStorage.setItem("dbProject", JSON.stringify(dbProject));
};

export const dbTasks = JSON.parse(localStorage.getItem("dbTasks")) ?? [];
export const setDbTasks = () => {
  localStorage.setItem("dbTasks", JSON.stringify(dbTasks));
};

//create project
export const createProject = (name) => {
  const newProject = new Project(name);
  dbProject.push(newProject);
  setDbProject();
  view.refreshPage();
};
//delete project
export const deleteProject = (index) => {
  dbProject.splice(index, 1);
  setDbProject();
  view.refreshPage();
};

//create task

export const createTask = (name, description, date, priority, project) => {
  const newTask = new Tasks(name, description, date, priority, project);
  dbTasks.push(newTask);
  setDbTasks();
  view.refreshPage;
};

export const deletetask = (id) => {
  const index = dbTasks.findIndex((task) => task.id === id);
  if (index === -1) {
    // handle case where task with given id is not found
    return;
  }
  dbTasks.splice(index, 1);

  setDbTasks();
  view.refreshPage;
};

export const editTask = (id, task) => {

  const index = dbTasks.findIndex((task) => task.id === id);
  if (index === -1) {
    // handle case where task with given id is not found
    return;
  }
  dbTasks[index] = task

  setDbTasks();
  view.refreshPage;

}
