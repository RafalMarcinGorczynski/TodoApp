import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Output() onRemove = new EventEmitter<{ id: number }>();
  @Output() getIndex = new EventEmitter<{ id: number }>();
  @Output() openModal = new EventEmitter<string>();
  @Input() todos: Todo[];

  newName: string;
  index: number;

  constructor() {}

  open(nameClass: string) {
    this.openModal.emit(nameClass);
  }

  ngOnInit(): void {}

  removeTask(id: number) {
    this.onRemove.emit({ id });
  }
  passIndex(index: number) {
    this.getIndex.emit({ id: index });
  }
}
