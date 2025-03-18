import {Storage} from './Storage';
import {taskUI} from './taskUi';


export class Task {
    constructor(parent) {
      this.parent = parent;
      this.storage = new Storage('tasks');
    }
    
    createTask(name) {
      if (!name) {
        throw new Error('Nome da tarefa inválido');
      }

      const cleanedName = name.trim()

      const tasks = this.storage.getTasks();

      if(tasks.some(task => task.description === cleanedName)) {
        throw new Error('Essa tarefa já existe')
      }

      const savedTaks = this.storage.saveTasks(cleanedName);

      const lastTaskCreated = savedTaks[savedTaks.length - 1] //pega a ultima task criada


      taskUI(lastTaskCreated, this.parent);
  
    }


    getExistsTask() {
        return this.storage.getTasks();
    }
}