


export class Task {
    constructor(name, parent) {
      this.name = name;
      this.parent = parent;
    }
    
    
    createTask() {
      if (!name && !parent) {
        throw new Error('Parâmetros insulficientes');
      }
      
      let div = document.createElement('div');
      
      div.classList.add('task-wrapper');
      
      let checkBoxTask = document.createElement('input');
      
      checkBoxTask.type = 'checkbox';
      
      div.appendChild(checkBoxTask);
      
      let taskName = document.createElement('span');
      
      taskName.innerText = this.name;
      
      div.appendChild(taskName);
      
      
      
      this.parent.appendChild(div);
    }
}