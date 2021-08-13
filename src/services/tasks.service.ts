import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public todos: Todo[] = [];

  constructor() {}

  getAll() {
    return this.todos;
  }

  restore() {
    const stored = localStorage.getItem('todos');

    if (stored) {
      this.todos = JSON.parse(stored);
    }
  }

  add(task: Todo) {
    if (task.content !== '') this.todos.push(task);
    this.persist();
  }

  update(id, task) {
    if (task != '') {
      this.todos[id] = task;
    } else {
      this.todos = this.todos;
    }

    this.persist();
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.persist();
  }

  clear() {
    this.todos = [];
    this.persist();
  }

  private persist() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
