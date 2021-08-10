import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tasks: Array<Todo> = [];
  constructor(public taskService: TasksService) {}

  ngOnInit() {
    this.taskService.restore();
    this.tasks = [...this.taskService.getAll()];
    console.log(this.tasks);
  }
  addTask(content) {
    this.taskService.add(content);
  }
  removeTask({ id }) {
    this.taskService.remove(id);
  }
}
