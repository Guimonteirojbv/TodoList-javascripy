import { Task } from './task.js';

const tasksWrapper = document.querySelector('#tasks'); 
const form = document.querySelector('.insert-task-wrapper');




function handleSubmit(e) {
  e.preventDefault()
  const inputValue = e.target[0].value;

  if(!inputValue) {
    throw new Error('Insira um valor');
  }

  const newTask = new Task(inputValue, tasksWrapper);

  try {
    newTask.createTask();
  
  } catch (e) {
      console.log(e.message)
  }
  
}

form.addEventListener('submit',(e) => handleSubmit(e))