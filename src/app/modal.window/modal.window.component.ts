import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal.window.component.html',
  styleUrls: ['./modal.window.component.scss'],
})
export class ModalWindowComponent implements OnInit {
  @Output() closeModal = new EventEmitter<string>();
  @Output() passNewName = new EventEmitter<{ content: string }>();
  @ViewChild('inputName', { static: true }) inputName: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  close(nameClass: string) {
    this.closeModal.emit(nameClass);
  }
  getNewName(Taskname: HTMLInputElement) {
    this.passNewName.emit({ content: Taskname.value });
  }

  success() {
    const inputValue = (<HTMLInputElement>document.getElementById('textsend'))
      .value;
    const button = <HTMLInputElement>document.getElementById('button');
    if (inputValue === '') {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }
}
