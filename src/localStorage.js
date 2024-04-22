import Tasks from "./tasks";
import * as view from "./views.js";
import * as domElement from "./domElements";
import axios from "axios";




const BASE_URL = "https://165e-2804-14c-b4-84b3-e2ab-709b-fc3f-f1d1.ngrok-free.app";


export const dbProject = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/project`, {headers: {
      "ngrok-skip-browser-warning": "any" // Adicionando o cabeçalho necessário
    }});
    

  
    return response.data;
  } catch (error) {
    console.error("Erro ao retornar os projetos");
  }
};

export const dbTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/todo`, {headers: {
      "ngrok-skip-browser-warning": "any" // Adicionando o cabeçalho necessário
    }});
    
    const tasks = Array.isArray(response.data) ? response.data : [response.data];
    

    return tasks;
  } catch (error) {
    console.error("erro ao recuperar as todo");
  }
};

//create project
export const createProject = async (name) => {
  await axios.post(`${BASE_URL}/project`, { name });
  view.refreshPage();
};
//delete project
export const deleteProject = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/project/${id}`);
  } catch (error) {
    console.error("Nao foi possivel deletar o projeto");
  }

  view.refreshPage();
};

//create task

export const createTask = async (
  title,
  description,
  formattedDueDate,
  priority,
  project
) => {
  try {
    await axios.post(`${BASE_URL}/todo`, {
      title,
      description,
      formattedDueDate,
      priority,
      project,
    });
    view.refreshPage();
  } catch (error) {
    console.error("Erro ao adicionar a tarefa");
  }
};

export const deletetask = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/todo/${id}`);
  } catch (error) {
    console.log("delete toto error", error);
  }

  view.refreshPage();
};

export const editTask = async (task) => {
  console.log('put', task)
  try {
    await axios.put(`${BASE_URL}/todo/${task.id}`, task);
    
  } catch (error) {
    // Lide com erros de requisição aqui.
    console.error("Erro ao atualizar a tarefa:", error);
  }
  
  view.refreshPage()
 
};

export const updateTaskCompleted = async (id, completed) => {
  try {
    const data = { completed: completed };
    await axios.put(`${BASE_URL}/todo/${id}/completed`, data);
    countCompletedTasks();
    
  } catch (error) {
    console.error("erro ao atualizar a tarefa", error);
  }
};

export const countCompletedTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/todo`);
    const tasks = response.data;

    const count = tasks.filter((task) => task.completed === true).length;
    console.log(count);

    domElement.completeShowButton.innerHTML = `Completed: ${count}`;
  } catch (error) {
    console.error(
      "Erro ao obter tarefas ou contar tarefas completadas:",
      error
    );
  }
};