import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasks: Task[] = []; 

  getTasks() {
    return this.tasks;
  }

  addTask(taskName: string) {
    const newTask: Task = { name: taskName, done: false }; // Create a new task object
    this.tasks.push(newTask);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done; // Toggle task completion
  }
}
