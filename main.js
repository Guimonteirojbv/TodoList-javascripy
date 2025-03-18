import { Task } from './task.js';
import {taskUI} from './taskUi.js'

const tasksWrapper = document.querySelector('#tasks'); 
const form = document.querySelector('.insert-task-wrapper');

const task = new Task(tasksWrapper);


function getTasks() {
  const tasks = task.getExistsTask();

  tasks.forEach(taskData => {
    taskUI(taskData, tasksWrapper);
  });
}


getTasks();


function handleSubmit(e) {
  e.preventDefault()
  let inputValue = e.target[0].value;

  if(!inputValue) {
    throw new Error('Insira um valor');
  }

  try {
    task.createTask(inputValue);
    e.target[0].value = ''
  
  } catch (e) {
      console.log(e.message)
  }
  
}

form.addEventListener('submit',(e) => handleSubmit(e))

