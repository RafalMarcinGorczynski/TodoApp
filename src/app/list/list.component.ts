import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Output() onRemove = new EventEmitter<{ id: number }>();

  @Input() todos: Todo[];

  @ViewChild('strikethrough') strikethroughElement: ElementRef;

  isToggle: boolean = true;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addClass() {
    this.strikethroughElement.nativeElement.classList.toggle('strikethrough');
    this.isToggle = !this.isToggle;
  }

  openModal(id: number, content: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ModalComponent, { data: { id: id, name: content } });
  }
  removeTask(id: number) {
    this.onRemove.emit({ id });
  }
}
