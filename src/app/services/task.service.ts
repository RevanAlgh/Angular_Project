import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasks: Task[] = []; 
  private movieTasks: Task[] = [];

  constructor() {
    this.loadTasks();
    this.loadMovieTasks();
  }

  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
  }

  loadMovieTasks() {
    const savedMovieTasks = localStorage.getItem('movieTasks');
    this.movieTasks = savedMovieTasks ? JSON.parse(savedMovieTasks) : [];
  }

  getTasks() {
    return this.tasks;
  }

  getMovieTasks() {
    return this.movieTasks;
  }

  addTask(taskName: string) {
    const newTask: Task = { name: taskName, done: false };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  addMovieTask(movieTitle: string) {
    const movieTask: Task = { name: `Watch: ${movieTitle}`, done: false };
    this.movieTasks.push(movieTask);
    this.saveMovieTasks();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  deleteMovieTask(index: number) {
    this.movieTasks.splice(index, 1);
    this.saveMovieTasks();
  }

  toggleTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    this.saveTasks();
  }

  toggleMovieTask(index: number) {
    this.movieTasks[index].done = !this.movieTasks[index].done;
    this.saveMovieTasks();
  }

   // Save tasks to Local Storage
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private saveMovieTasks() {
    localStorage.setItem('movieTasks', JSON.stringify(this.movieTasks));
  }
}