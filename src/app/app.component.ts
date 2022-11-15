import { Component } from '@angular/core';
import { Task } from './core/models/task.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  dateNow: Date = new Date();

  generateId() {
    return this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
  }

  onAddTask(task: Task) {
    task.id = this.generateId();
    this.tasks.push(task);
    window.console.table(this.tasks)
  }
  

  onCheckTask(task: Task) {
    let item = this.tasks.splice(this.tasks.indexOf(task), 1)[0];
    item.completed = !item.completed;
    if(item.completed) {
      this.tasks.splice(0, 0, item);
    }else{
      this.tasks.push(item);
    }
    window.console.table(this.tasks)
  }

  onRemoveTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    window.console.table(this.tasks)
  }
}
