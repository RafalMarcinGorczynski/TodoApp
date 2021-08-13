import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public taskService: TasksService) {}

  ngOnInit() {
    this.taskService.restore();
  }
  addTask(content) {
    this.taskService.add(content);
  }
  removeTask({ id }) {
    this.taskService.remove(id);
    console.log(id);
  }
  changeName(newTaskName: { id: number; content: string }) {
    this.taskService.getAll();
  }
}
// (changeName)="changeName($event)"
