import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  newTaskName = '';
  tasks = this.taskService.getTasks();

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTaskName.trim()) {
      this.taskService.addTask(this.newTaskName);
      this.newTaskName = '';
    }
  }

  toggleTaskCompletion(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
  
}
