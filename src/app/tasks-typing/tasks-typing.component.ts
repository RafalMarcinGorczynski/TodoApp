import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-tasks-typing',
  templateUrl: './tasks-typing.component.html',
  styleUrls: ['./tasks-typing.component.scss'],
})
export class TasksTypingComponent implements OnInit {
  @Output() onAdd = new EventEmitter<{
    id: number;
    content: string;
    toggleClass: boolean;
  }>();
  @Input() todos: Todo[];

  task = '';

  constructor() {}

  ngOnInit(): void {}

  addTask(task: string) {
    const taskId = this.todos.length
      ? Math.max(...this.todos.map((task) => task.id)) + 1
      : 0;
    this.onAdd.emit({
      id: taskId,
      content: task,
      toggleClass: false,
    });
    this.setTask('');
  }

  setTask(task: string) {
    this.task = task;
  }
}
