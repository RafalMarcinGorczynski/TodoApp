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

  update(index, task: string) {
    // this.todos[id].content = task;
    for (const i of Object.keys(this.todos)) {
      console.log(Object.values(task));
      if (this.todos[i].id == index.id) {
        this.todos[i].content = Object.values(task);
      }
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
