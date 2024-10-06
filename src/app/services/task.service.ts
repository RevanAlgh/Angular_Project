import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasks: Task[] = []; 
  private movieTasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  getMovieTasks() {
    return this.movieTasks;
  }

  addTask(taskName: string) {
    const newTask: Task = { name: taskName, done: false };
    this.tasks.push(newTask);
  }

  addMovieTask(movieTitle: string) {
    const movieTask: Task = { name: `Watch: ${movieTitle}`, done: false };
    this.movieTasks.push(movieTask);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  deleteMovieTask(index: number) {
    this.movieTasks.splice(index, 1);
  }

  toggleTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  toggleMovieTask(index: number) {
    this.movieTasks[index].done = !this.movieTasks[index].done;
  }
}