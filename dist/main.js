/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectForm\": () => (/* binding */ addProjectForm),\n/* harmony export */   \"addTaskForm\": () => (/* binding */ addTaskForm),\n/* harmony export */   \"detailDate\": () => (/* binding */ detailDate),\n/* harmony export */   \"detailDescription\": () => (/* binding */ detailDescription),\n/* harmony export */   \"detailPriority\": () => (/* binding */ detailPriority),\n/* harmony export */   \"detailProject\": () => (/* binding */ detailProject),\n/* harmony export */   \"detailsButton\": () => (/* binding */ detailsButton),\n/* harmony export */   \"detailsName\": () => (/* binding */ detailsName),\n/* harmony export */   \"editModal\": () => (/* binding */ editModal),\n/* harmony export */   \"editTaskDate\": () => (/* binding */ editTaskDate),\n/* harmony export */   \"editTaskDescription\": () => (/* binding */ editTaskDescription),\n/* harmony export */   \"editTaskPriority\": () => (/* binding */ editTaskPriority),\n/* harmony export */   \"editTaskproject\": () => (/* binding */ editTaskproject),\n/* harmony export */   \"edittaskForm\": () => (/* binding */ edittaskForm),\n/* harmony export */   \"edittaskName\": () => (/* binding */ edittaskName),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"projectName\": () => (/* binding */ projectName),\n/* harmony export */   \"projectNameLabel\": () => (/* binding */ projectNameLabel),\n/* harmony export */   \"taskDate\": () => (/* binding */ taskDate),\n/* harmony export */   \"taskDescription\": () => (/* binding */ taskDescription),\n/* harmony export */   \"taskName\": () => (/* binding */ taskName),\n/* harmony export */   \"taskPriority\": () => (/* binding */ taskPriority),\n/* harmony export */   \"taskproject\": () => (/* binding */ taskproject),\n/* harmony export */   \"tasksContainer\": () => (/* binding */ tasksContainer)\n/* harmony export */ });\n\r\n//forms\r\nconst addProjectForm = document.getElementById('add-project-form')\r\nconst addTaskForm = document.getElementById('add-task-form')\r\nconst edittaskForm = document.getElementById('edit-task-form')\r\n\r\n//modal project field \r\n\r\nconst projectName = document.getElementById('project-name')\r\n\r\n//project list\r\nconst projectList = document.getElementById('project-list')\r\n\r\n//Show Tasks\r\nconst projectNameLabel = document.getElementById('project-name-container')\r\nconst tasksContainer = document.getElementById('tasks-view')\r\n\r\n\r\n\r\n//add task modal \r\nconst taskName = document.getElementById('task-name')\r\nconst taskDescription = document.getElementById('task-description')\r\nconst taskDate = document.getElementById('task-date')\r\nconst taskPriority = document.getElementById('task-priority')\r\nconst taskproject = document.getElementById('task-project')\r\n\r\n//edit task Modal\r\nconst editModal = document.getElementById('edit-task-modal')\r\nconst edittaskName = document.getElementById(\"edit-task-name\")\r\nconst editTaskDescription = document.getElementById(\"edit-task-description\")\r\nconst editTaskDate = document.getElementById(\"edit-task-date\")\r\nconst editTaskPriority = document.getElementById(\"edit-task-priority\")\r\nconst editTaskproject = document.getElementById(\"edit-task-project\")\r\n\r\n\r\n//Modal Details Button\r\n\r\nconst detailsButton = document.querySelector('todo-task-detail-button')\r\n\r\n// modal details field \r\nconst detailsName = document.getElementById('modal-details-title')\r\nconst detailDescription = document.getElementById('detail-description')\r\nconst detailDate = document.getElementById('detail-date')\r\nconst detailPriority = document.getElementById('detail-priority')\r\nconst detailProject = document.getElementById('detail-project')\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/domElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ \"./src/domElements.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views.js */ \"./src/views.js\");\n\r\n\r\n\r\n\r\n// take option id to save on task project\r\nlet selectedOptionId;\r\nlet editIdTask;\r\nlet selectedOptionValue;\r\n\r\nconst select1 = document.getElementById(\"edit-task-project\");\r\nconst select2 = document.getElementById(\"task-project\");\r\nconst Select3 = document.getElementById(\"task-priority\");\r\nconst select4 = document.getElementById(\"edit-task-priority\");\r\nconst todayTask = document.getElementById(\"today-task-button\");\r\n\r\nconst handleSelectChangeProject = function () {\r\n  let selectedIndex = this.selectedIndex;\r\n  let selectedOption = this.options[selectedIndex];\r\n  selectedOptionId = selectedOption.id;\r\n  editIdTask = selectedOptionId;\r\n  return editIdTask;\r\n};\r\n\r\nconst handleSelectChangePrioriry = function () {\r\n  let selectedIndex = this.selectedIndex;\r\n  let selectedOption = this.options[selectedIndex];\r\n  selectedOptionValue = selectedOption.value;\r\n};\r\n\r\nselect1.addEventListener(\"change\", handleSelectChangeProject);\r\nselect2.addEventListener(\"change\", handleSelectChangeProject);\r\nSelect3.addEventListener(\"change\", handleSelectChangePrioriry);\r\nselect4.addEventListener(\"change\", handleSelectChangePrioriry);\r\n\r\ndocument.addEventListener(\"click\", (e) => {\r\n  _views_js__WEBPACK_IMPORTED_MODULE_2__.changeActive(e.target);\r\n\r\n  if (e.target.classList.contains(\"delete-project-icon\")) {\r\n    const index = e.target.id;\r\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject(index);\r\n  }\r\n\r\n  if (e.target.classList.contains(\"button\")) {\r\n    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.projectNameLabel.innerText = e.target.innerText;\r\n    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.projectNameLabel.setAttribute(\"id\", e.target.id);\r\n    console.log(e.target.id);\r\n    _views_js__WEBPACK_IMPORTED_MODULE_2__.taskByProject(e.target.id);\r\n  }\r\n\r\n  if (e.target.classList.contains(\"today-task-button\")) {\r\n    let today = new Date();\r\n    let dateString = today.toLocaleDateString().split(\"/\").reverse().join(\"-\");\r\n    _views_js__WEBPACK_IMPORTED_MODULE_2__.filterTasksByDate(dateString);\r\n  }\r\n\r\n  if (e.target.classList.contains(\"delete-icon\")) {\r\n    const projectTarget = _domElements_js__WEBPACK_IMPORTED_MODULE_0__.projectNameLabel.getAttribute(\"id\");\r\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.deletetask(e.target.id);\r\n    _views_js__WEBPACK_IMPORTED_MODULE_2__.taskByProject(projectTarget);\r\n  }\r\n\r\n  if(e.target.classList.contains('todo-task-detail-button')) {\r\n    \r\n    _views_js__WEBPACK_IMPORTED_MODULE_2__.FilterTaskByID(e.target.id)\r\n  \r\n\r\n  }\r\n\r\n  if (e.target.classList.contains(\"task-edit\")) {\r\n    const id = e.target.id;\r\n    editIdTask = e.target.id;\r\n    console.log(id);\r\n    let array = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.dbTasks;\r\n\r\n    for (let i = 0; i < array.length; i++) {\r\n      if (array[i].id === id) {\r\n        let task = array[i];\r\n        // aqui você pode usar os dados do objeto encontrado para preencher o formulário\r\n        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.edittaskName.value = task.name;\r\n        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.editTaskDescription.value = task.description;\r\n        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.editTaskDate.value = task.date;\r\n        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.editTaskPriority.value = task.priority;\r\n        _domElements_js__WEBPACK_IMPORTED_MODULE_0__.editTaskproject.value = task.project;\r\n        break;\r\n      }\r\n    }\r\n  }\r\n});\r\n\r\n_domElements_js__WEBPACK_IMPORTED_MODULE_0__.addProjectForm.addEventListener(\"submit\", () => {\r\n  _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.createProject(_domElements_js__WEBPACK_IMPORTED_MODULE_0__.projectName.value);\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.addProjectForm.reset();\r\n});\r\n\r\n_domElements_js__WEBPACK_IMPORTED_MODULE_0__.addTaskForm.addEventListener(\"submit\", () => {\r\n  _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.createTask(_domElements_js__WEBPACK_IMPORTED_MODULE_0__.taskName.value, _domElements_js__WEBPACK_IMPORTED_MODULE_0__.taskDescription.value, _domElements_js__WEBPACK_IMPORTED_MODULE_0__.taskDate.value, selectedOptionValue, selectedOptionId);\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.addTaskForm.reset();\r\n});\r\n\r\n_domElements_js__WEBPACK_IMPORTED_MODULE_0__.edittaskForm.addEventListener(\"submit\", () => {\r\n  const id = editIdTask;\r\n  const task = {\r\n    name: _domElements_js__WEBPACK_IMPORTED_MODULE_0__.edittaskName.value,\r\n    description: _domElements_js__WEBPACK_IMPORTED_MODULE_0__.editTaskDescription.value,\r\n    date: _domElements_js__WEBPACK_IMPORTED_MODULE_0__.editTaskDate.value,\r\n    priority: _domElements_js__WEBPACK_IMPORTED_MODULE_0__.editTaskPriority.value,\r\n    project: selectedOptionId,\r\n  };\r\n\r\n  _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.editTask(id, task);\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.edittaskForm.reset();\r\n});\r\n\r\n_views_js__WEBPACK_IMPORTED_MODULE_2__.addProjectTodoModal();\r\n_views_js__WEBPACK_IMPORTED_MODULE_2__.showProjectList();\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"dbProject\": () => (/* binding */ dbProject),\n/* harmony export */   \"dbTasks\": () => (/* binding */ dbTasks),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"deletetask\": () => (/* binding */ deletetask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"setDbProject\": () => (/* binding */ setDbProject),\n/* harmony export */   \"setDbTasks\": () => (/* binding */ setDbTasks)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _views_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views.js */ \"./src/views.js\");\n\r\n\r\n\r\n\r\nconst dbProject = JSON.parse(localStorage.getItem(\"dbProject\")) ?? [];\r\nconst setDbProject = () => {\r\n  localStorage.setItem(\"dbProject\", JSON.stringify(dbProject));\r\n};\r\n\r\nconst dbTasks = JSON.parse(localStorage.getItem(\"dbTasks\")) ?? [];\r\nconst setDbTasks = () => {\r\n  localStorage.setItem(\"dbTasks\", JSON.stringify(dbTasks));\r\n};\r\n\r\n//create project\r\nconst createProject = (name) => {\r\n  const newProject = new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\r\n  dbProject.push(newProject);\r\n  setDbProject();\r\n  _views_js__WEBPACK_IMPORTED_MODULE_2__.refreshPage();\r\n};\r\n//delete project\r\nconst deleteProject = (index) => {\r\n  dbProject.splice(index, 1);\r\n  setDbProject();\r\n  _views_js__WEBPACK_IMPORTED_MODULE_2__.refreshPage();\r\n};\r\n\r\n//create task\r\n\r\nconst createTask = (name, description, date, priority, project) => {\r\n  const newTask = new _tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name, description, date, priority, project);\r\n  dbTasks.push(newTask);\r\n  setDbTasks();\r\n  _views_js__WEBPACK_IMPORTED_MODULE_2__.refreshPage;\r\n};\r\n\r\nconst deletetask = (id) => {\r\n  const index = dbTasks.findIndex((task) => task.id === id);\r\n  if (index === -1) {\r\n    // handle case where task with given id is not found\r\n    return;\r\n  }\r\n  dbTasks.splice(index, 1);\r\n\r\n  setDbTasks();\r\n  _views_js__WEBPACK_IMPORTED_MODULE_2__.refreshPage;\r\n};\r\n\r\nconst editTask = (id, task) => {\r\n\r\n  const index = dbTasks.findIndex((task) => task.id === id);\r\n  if (index === -1) {\r\n    // handle case where task with given id is not found\r\n    return;\r\n  }\r\n  dbTasks[index] = task\r\n\r\n  setDbTasks();\r\n  _views_js__WEBPACK_IMPORTED_MODULE_2__.refreshPage;\r\n\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/localStorage.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n\r\n\r\nclass Project {\r\n    constructor(name) {\r\n      this.id = getID();\r\n      this.name = name;\r\n    }\r\n  }\r\n\r\n  function getID() {\r\n    return   Math.random().toString(36).substring(2, 9);\r\n  }\r\n  \r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nclass Tasks {\r\n    constructor(name, description, date, priority, project){\r\n        this.id = getID()\r\n        this.name= name\r\n        this.description = description\r\n        this.date = date\r\n        this.priority = priority\r\n        this.project = project\r\n    }\r\n    \r\n}\r\n\r\nfunction getID() {\r\n    return   Math.random().toString(36).substring(2, 9);\r\n  }\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FilterTaskByID\": () => (/* binding */ FilterTaskByID),\n/* harmony export */   \"addProjectTodoModal\": () => (/* binding */ addProjectTodoModal),\n/* harmony export */   \"changeActive\": () => (/* binding */ changeActive),\n/* harmony export */   \"filterTasksByDate\": () => (/* binding */ filterTasksByDate),\n/* harmony export */   \"modalDetails\": () => (/* binding */ modalDetails),\n/* harmony export */   \"refreshPage\": () => (/* binding */ refreshPage),\n/* harmony export */   \"showProjectList\": () => (/* binding */ showProjectList),\n/* harmony export */   \"showTodo\": () => (/* binding */ showTodo),\n/* harmony export */   \"taskByProject\": () => (/* binding */ taskByProject)\n/* harmony export */ });\n/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ \"./src/domElements.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n\r\n\r\n\r\nconst refreshPage = () => {\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.projectList.innerText = \"\";\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.innerText = \"\";\r\n  taskByProject();\r\n  addProjectTodoModal();\r\n  showProjectList();\r\n};\r\n\r\nconst addProjectTodoModal = (e) => {\r\n  _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.dbProject.forEach((project) => {\r\n    const selecionProject = document.createElement(\"option\");\r\n    selecionProject.classList.add(\"project-object\");\r\n    selecionProject.innerHTML = project.name;\r\n    selecionProject.value = project.name;\r\n    selecionProject.setAttribute(\"id\", project.id);\r\n    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.taskproject.appendChild(selecionProject);\r\n  });\r\n};\r\n\r\nconst modalDetails = (task) => {\r\n  console.log(\"modal\", task);\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.detailsName.innerText = task.name;\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.detailDescription.innerText = `Description: ${task.descriprion}`;\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.detailDate.innerText = `Date: ${task.date}`;\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.detailPriority.innerText = `Priority: ${task.priority}`;\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.detailProject.innerText = `Project: ${getProjectName(task.project)}`;\r\n};\r\n\r\nfunction getProjectName(id) {\r\n  let projectName;\r\n  for (let i = 0; i < _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.dbProject.length; i++) {\r\n    if (_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.dbProject[i].id === id) {\r\n      projectName = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.dbProject[i].name;\r\n      break;\r\n    }\r\n  }\r\n  return projectName;\r\n}\r\n\r\nconst showTodo = (task, index) => {\r\n  const taskDiv = document.createElement(\"div\");\r\n\r\n  taskDiv.classList.add(\"todo\");\r\n  taskDiv.id = index;\r\n\r\n  const complete = document.createElement(\"input\");\r\n  complete.setAttribute(\"type\", \"checkbox\");\r\n  complete.classList.add(\"todo-check-box\");\r\n  complete.addEventListener(\"change\", (event) => {\r\n    if (event.target.checked) {\r\n      taskDiv.classList.add(\"completed\");\r\n    } else {\r\n      taskDiv.classList.remove(\"completed\");\r\n    }\r\n  });\r\n\r\n  const taskTitle = document.createElement(\"p\");\r\n  taskTitle.classList.add(\"todo-task-title\");\r\n  taskTitle.innerText = task.name;\r\n\r\n  const taskDetails = document.createElement(\"button\");\r\n  taskDetails.classList.add(\"todo-task-detail-button\", \"btn\", \"btn-secondary\");\r\n  taskDetails.setAttribute(\"data-bs-toggle\", \"modal\");\r\n  taskDetails.setAttribute(\"data-bs-target\", \"#details-modal\");\r\n  taskDetails.setAttribute(\"id\", task.id);\r\n  taskDetails.innerText = \"Details\";\r\n\r\n  const taskDueDate = document.createElement(\"p\");\r\n  taskDueDate.classList.add(\"todo-task-due-date\");\r\n  taskDueDate.innerText = task.date;\r\n\r\n  const taskproject = document.createElement(\"p\");\r\n  taskproject.innerText = getProjectName(task.project);\r\n\r\n  const taskControllerDiv = document.createElement(\"div\");\r\n  taskControllerDiv.classList.add(\"task-controller\");\r\n\r\n  const taskEdit = document.createElement(\"img\");\r\n  taskEdit.src = \"../dist/img/edit.svg\";\r\n  taskEdit.classList.add(\"task-edit\");\r\n  taskEdit.setAttribute(\"id\", task.id);\r\n  taskEdit.setAttribute(\"data-bs-toggle\", \"modal\");\r\n  taskEdit.setAttribute(\"data-bs-target\", \"#edit-task-modal\");\r\n\r\n  const taskDeleteSpan = document.createElement(\"img\");\r\n  taskDeleteSpan.src = \"../dist/img/delete.svg\";\r\n  taskDeleteSpan.classList.add(\"delete-icon\");\r\n  taskDeleteSpan.setAttribute(\"id\", task.id);\r\n\r\n  const taskPriority = document.createElement(\"span\");\r\n  taskPriority.innerHTML = '<i class=\"bi bi-bell-fill\"></i> ';\r\n  taskPriority.classList.add(\"priority-icon\");\r\n  const priorityValue = task.priority;\r\n\r\n  if (priorityValue === \"high\") {\r\n    taskPriority.style.color = \"red\";\r\n  } else if (priorityValue === \"low\") {\r\n    taskPriority.style.color = \"green\";\r\n  } else taskPriority.style.color = \"yellow\";\r\n\r\n  taskDiv.appendChild(complete);\r\n  taskDiv.appendChild(taskTitle);\r\n  taskDiv.appendChild(taskDetails);\r\n  taskDiv.appendChild(taskDueDate);\r\n  taskDiv.appendChild(taskproject);\r\n  taskControllerDiv.appendChild(taskEdit);\r\n  taskControllerDiv.appendChild(taskDeleteSpan);\r\n  taskControllerDiv.append(taskPriority);\r\n  taskDiv.appendChild(taskControllerDiv);\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.appendChild(taskDiv);\r\n};\r\n\r\nconst showProjectList = () => {\r\n  _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.dbProject.forEach((project, index) => {\r\n    const projectItemDiv = document.createElement(\"button\");\r\n    const deleteIcon = document.createElement(\"span\");\r\n\r\n    projectItemDiv.classList.add(\"button\", \"d-flex\", \"justify-content-between\", \"project-item-div\");\r\n\r\n    //project name\r\n    projectItemDiv.innerText = project.name;\r\n    projectItemDiv.setAttribute(\"id\", project.id);\r\n\r\n    //trash icon\r\n    deleteIcon.innerHTML = `<i class=\"bi bi-trash delete-project-icon\" id=${index}></i>`;\r\n\r\n    _domElements_js__WEBPACK_IMPORTED_MODULE_0__.projectList.appendChild(projectItemDiv);\r\n\r\n    projectItemDiv.appendChild(deleteIcon);\r\n  });\r\n};\r\n\r\nconst changeActive = (id) => {\r\n  const activeElements = document.querySelectorAll(\".menu .button.active\");\r\n  activeElements.forEach((element) => {\r\n    element.classList.remove(\"active\");\r\n  });\r\n  if (id) id.classList.add(\"active\");\r\n};\r\n\r\nconst taskByProject = (id) => {\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.innerText = \"\";\r\n\r\n  let selectedProject = id;\r\n\r\n  let tasks = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.dbTasks;\r\n\r\n  let matchingTasks = tasks.filter((task) => task.project === selectedProject);\r\n\r\n  matchingTasks.forEach((task) => showTodo(task));\r\n};\r\n\r\nconst filterTasksByDate = (date) => {\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.innerText = \"\";\r\n  let todayDate = date;\r\n  let tasks = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.dbTasks;\r\n\r\n  let matchingTasks = tasks.filter((task) => task.date === todayDate);\r\n  matchingTasks.forEach((task) => {\r\n    showTodo(task);\r\n  });\r\n};\r\n\r\nconst FilterTaskByID = (id) => {\r\n  _domElements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.innerText = \"\";\r\n\r\n  let tasks = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.dbTasks;\r\n\r\n  let matchingTasks = tasks.filter((task) => task.id === id);\r\n  matchingTasks.forEach((task) => {\r\n    modalDetails(task);\r\n    console.log(task);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/views.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;