import { Injectable } from '@angular/core';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasks: Task[] = [];
  private idCounter = 1;

  addTask(name: string) {
    this.tasks.push({ id: this.idCounter++, name, completed: false });
  }

  getTasks() {
    return this.tasks;
  }

  toggleTaskCompletion(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
