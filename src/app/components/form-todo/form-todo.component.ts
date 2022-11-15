import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})

export class FormTodoComponent implements OnInit {
  
  newTask: Task = {
    id: 0,
    title: '',
    completed: false
  };
  
  @Output() addTask = new EventEmitter<Task>(); // Event for add task
  constructor() { }

  ngOnInit(): void {
  }
  // Method for create task
  createTask() {
    this.addTask.emit(this.newTask);
    // Reset form
    this.newTask = {
      id: 0,
      title: '',
      completed: false
    };
  }
  
}
