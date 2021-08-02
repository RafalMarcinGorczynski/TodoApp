import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';

interface Todo {
  taskName: string;
}

@Component({
  selector: 'app-tasks-typing',
  templateUrl: './tasks-typing.component.html',
  styleUrls: ['./tasks-typing.component.css'],
})
export class TasksTypingComponent implements OnInit {
  task = '';

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}

  addTask(task: string) {
    const taskId = this.taskService.getAll().length
      ? Math.max(...this.taskService.getAll().map((task) => task.id)) + 1
      : 0;

    this.taskService.add({ id: taskId, content: task, isDone: false });
    this.setTask('');
  }

  setTask(task: string) {
    this.task = task;
  }
}
