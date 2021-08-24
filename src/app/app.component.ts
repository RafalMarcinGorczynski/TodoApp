import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  updateName: string;
  index: number;
  constructor(public taskService: TasksService) {}

  ngOnInit() {
    this.taskService.restore();
  }
  getIndex(i) {
    this.index = i;
    console.log(this.taskService.getAll());
  }
  addTask(content) {
    this.taskService.add(content);
  }
  removeTask({ id }) {
    this.taskService.remove(id);
  }
  updateTask(task) {
    this.taskService.update(this.index, task);
  }

  openModal(nameClass1) {
    document.getElementById('modal-1').style.display = nameClass1;
    document.body.classList.add('modal-open');
  }
  closeModal(nameClass2) {
    document.getElementById('modal-1').style.display = nameClass2;
    document.body.classList.remove('modal-open');
  }
}
