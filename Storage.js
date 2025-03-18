


export class Storage {
  constructor(key) {
    this.key = key
  };
  
  
  getTasks() {
    const tasks = localStorage.getItem(this.key);

    return tasks ? JSON.parse(tasks) : []
  }
  
  
  saveTasks(taskDescription) {
    if(!taskDescription) throw new Error('Informe a descrição da tarefa');

    const tasks = this.getTasks()
  
    tasks.push({description: taskDescription, completed: false})

    localStorage.setItem(this.key, JSON.stringify(tasks));

    return tasks;
  }
}