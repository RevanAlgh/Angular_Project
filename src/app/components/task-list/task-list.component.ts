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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();  // Load tasks when the component initializes
  }

  // Load tasks from the task service
  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  // Add a new task using the task name input
  addTask() {
    if (this.taskName.trim()) {
      this.taskService.addTask(this.taskName);
      this.taskName = '';  // Clear the input after adding the task
      this.loadTasks();    // Reload tasks to reflect the new task
    }
  }

  // Delete a task by index
  deleteTask(index: number) {
    this.taskService.deleteTask(index);
    this.loadTasks();  // Reload tasks after deletion
  }

  // Toggle the done status of a task
  toggleTask(index: number) {
    this.taskService.toggleTask(index);
    this.loadTasks();  // Reload tasks after toggling completion
  }
}