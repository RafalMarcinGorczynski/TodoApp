import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';

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
    console.log(content);
    console.log(content.id);
  }
  removeTask({ id }) {
    this.taskService.remove(id);
  }
  updateTask(task) {
    console.log(task);
    this.taskService.update(task.id, task);
  }
}
