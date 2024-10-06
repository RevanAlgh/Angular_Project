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

   // Add a new task with the provided name
   addTask(taskName: string) {
    const newTask: Task = { name: taskName, done: false };
    this.tasks.push(newTask);
  }

  // Add a task specifically for a movie
  addMovieTask(movieTitle: string) {
    const movieTask: Task = { name: `Watch: ${movieTitle}`, done: false };
    this.tasks.push(movieTask);
  }

  // Delete a task by index
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  // Toggle the done status of a task
  toggleTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
