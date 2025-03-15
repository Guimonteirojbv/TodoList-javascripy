


export class Task {
    constructor(name, parent) {
      this.name = name;
      this.parent = parent;
    }
    
    
    createTask() {
      if (!this.name && !this. parent) {
        throw new Error('Parâmetros insulficientes');
      }
      
      let div = document.createElement('div');  
      div.classList.add('task-wrapper');
      
      let checkBoxTask = document.createElement('input');
      checkBoxTask.type = 'checkbox';
      checkBoxTask.name = this.name;
      checkBoxTask.id = this.name;
      checkBoxTask.classList.add('checkbox');
      
      let taskName = document.createElement('label');
      taskName.innerText = this.name;
      taskName.classList.add('task-description')
      taskName.setAttribute('for', this.name);
      
      //Cria um wrapper para o checkbox e a description.
      let wrapperCheckDescription = document.createElement('div');
      wrapperCheckDescription.classList.add('wrapper-check-description');

      wrapperCheckDescription.appendChild(checkBoxTask);
      wrapperCheckDescription.appendChild(taskName);

      div.appendChild(wrapperCheckDescription);



      let EditButton = document.createElement('button');
      EditButton.innerText = 'editar';
      EditButton.classList.add('button-edit');

      div.appendChild(EditButton);

      let DeleteButton = document.createElement('button');
      DeleteButton.innerText = 'excluir';
      DeleteButton.classList.add('button-delete');
      
      div.appendChild(DeleteButton);

      
      this.parent.appendChild(div);
    }
}