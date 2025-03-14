import { Task } from './task.js';

const tasksWrapper = document.querySelector('#tasks'); 
const input = document.querySelector("#task");
const button = document.querySelector("#insert-task-button");


//preciso arrumar o html para ser um form e ter automativamente o evento de submit
button.addEventListener("click", handleClick);


const newTask = new Task('treinar', tasksWrapper);


try {
  newTask.createTask();

} catch (e) {
    console.log(e.message)
}


function handleClick() {
  if(input)
  input.addEventListener("submit", (e) => console.log(e))
  
}