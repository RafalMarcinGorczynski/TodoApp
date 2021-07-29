import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() name: string;

  @ViewChild('delete') deleteElement: ElementRef;
  @ViewChild('strikethrough') strikethroughElement: ElementRef;

  isToggle: boolean = true;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteTask() {
    this.deleteElement.nativeElement.remove();
  }

  onAddClass() {
    this.strikethroughElement.nativeElement.classList.toggle('strikethrough');
    this.isToggle = !this.isToggle;
  }

  openModuleComponent(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ModalComponent, dialogConfig);
  }
}
