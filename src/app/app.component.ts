import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Output() tasksElements = [{ name: 'Test' }];

  onTaskAdded(taskData: { taskName: string }) {
    this.tasksElements.push({
      name: taskData.taskName,
    });
  }
}
