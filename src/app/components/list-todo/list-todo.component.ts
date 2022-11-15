import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../core/models/task.model';
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  @Input() tasks: Task[] = [];
  @Output() changeCompletedTask = new EventEmitter<Task>();
  @Output() removeTask = new EventEmitter<Task>();
  showConfirmDialog: boolean = false;
  itemToDelete: Task = {
    id: 0,
    title: '',
    completed: false
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  checkTask(task: Task) {
    this.changeCompletedTask.emit(task);
  }

  onShowConfirmDialog(task: Task) {
    this.itemToDelete = task;
    this.showConfirmDialog = true;
  }

  onDeleteTask() {
    this.removeTask.emit(this.itemToDelete);
    this.showConfirmDialog = false;
  }
  onCloseConfirmDialog() {
    this.showConfirmDialog = false;
  }
}
