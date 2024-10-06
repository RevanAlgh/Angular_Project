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
  movieTasks: Task[] = []; 

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();  
    this.loadMovieTasks(); 
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  loadMovieTasks() {
    this.movieTasks = this.taskService.getMovieTasks(); 
  }

  addTask() {
    if (this.taskName.trim()) {
      this.taskService.addTask(this.taskName);
      this.taskName = ''; 
      this.loadTasks(); 
    }
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
    this.loadTasks(); 
  }

  toggleTask(index: number) {
    this.taskService.toggleTask(index);
    this.loadTasks(); 
  }

  deleteMovieTask(index: number) {
    this.taskService.deleteMovieTask(index);
    this.loadMovieTasks(); 
  }

  toggleMovieTask(index: number) {
    this.taskService.toggleMovieTask(index);
    this.loadMovieTasks(); 
  }
}