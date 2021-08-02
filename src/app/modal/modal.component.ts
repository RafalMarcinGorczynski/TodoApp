import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TasksService } from 'src/services/tasks.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public taskService: TasksService
  ) {}
}
