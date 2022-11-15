import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../core/models/task.model';
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  @Input() tasks: Task[] = []; // Input for receive tasks
  @Output() changeCompletedTask = new EventEmitter<Task>(); // Event for change completed task
  @Output() removeTask = new EventEmitter<Task>(); // Event for remove task
  showConfirmDialog: boolean = false; // Show confirm dialog
  // Item to delete
  itemToDelete: Task = {
    id: 0,
    title: '',
    completed: false
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  // Method for change completed task
  checkTask(task: Task) {
    this.changeCompletedTask.emit(task);
  }

  // Method for show confirm dialog
  onShowConfirmDialog(task: Task) {
    this.itemToDelete = task;
    this.showConfirmDialog = true;
  }

  // Method for delete task
  onDeleteTask() {
    this.removeTask.emit(this.itemToDelete);
    this.showConfirmDialog = false;
  }
  // Method for close confirm dialog
  onCloseConfirmDialog() {
    this.showConfirmDialog = false;
  }
}
