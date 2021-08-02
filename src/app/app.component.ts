import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public taskService: TasksService) {}

  ngOnInit() {
    this.taskService.restore();
  }
}
