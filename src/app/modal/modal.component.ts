import {
  Component,
  Input,
  Inject,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from 'src/models/todo.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() todos: Todo;
  @Output() changeName = new EventEmitter<{
    id: number;
    newTaskName: string;
  }>();

  @ViewChild('newTaskName', { static: true }) newTaskName: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  changeTaskName(id, newNameInput: HTMLInputElement) {
    this.changeName.emit({
      id: id,
      newTaskName: newNameInput.value,
    });
    newNameInput.value = '';
  }
}
