import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal.window.component.html',
  styleUrls: ['./modal.window.component.scss'],
})
export class ModalWindowComponent implements OnInit {
  @Output() closeModal = new EventEmitter<string>();
  @Output() passNewName = new EventEmitter<{ content: string }>();

  newNameInput = '';
  constructor() {}

  ngOnInit(): void {}

  close(nameClass: string) {
    this.closeModal.emit(nameClass);
    this.setNewName('');
  }
  getNewName(Taskname) {
    this.passNewName.emit({ content: Taskname });
    this.setNewName('');
  }
  setNewName(name: string) {
    this.newNameInput = name;
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
