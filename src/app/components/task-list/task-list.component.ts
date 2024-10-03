import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {
  taskName: string = '';
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks(); // Get tasks from the service
  }

  addTask() {
    if (this.taskName) {
      this.taskService.addTask(this.taskName);
      this.taskName = ''; // Clear input
      this.updateTaskList(); // Refresh the displayed task list
    }
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
    this.updateTaskList(); // Refresh the displayed task list
  }

  toggleTask(index: number) {
    this.taskService.toggleTask(index);
    this.updateTaskList(); // Refresh the displayed task list
  }

  private updateTaskList() {
    this.tasks = this.taskService.getTasks(); // Update the task list
  }
}