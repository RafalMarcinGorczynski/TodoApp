import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Output() onRemove = new EventEmitter<{ id: number }>();
  @Output() changeName = new EventEmitter<{
    id: number;
    content: string;
    isDone: boolean;
  }>();
  @Input() todos: Todo[];

  newName: string;
  index: number;

  @ViewChild('strikethrough') strikethroughElement: ElementRef;

  isToggle: boolean = true;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  ngAfterViewChecked() {
    this.changeName.emit({
      id: this.index,
      content: this.newName,
      isDone: false,
    });
  }

  addClass() {
    this.strikethroughElement.nativeElement.classList.toggle('completed');
    this.isToggle = !this.isToggle;
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { name: this.newName },
    });
    dialogRef.afterClosed().subscribe((result) => (this.newName = result));
  }
  removeTask(id: number) {
    this.onRemove.emit({ id });
  }
  passIndex(index: number) {
    this.index = index;
  }
}
