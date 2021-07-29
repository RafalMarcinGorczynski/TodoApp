import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

interface Todo {
  taskName: string;
}

@Component({
  selector: 'app-tasks-typing',
  templateUrl: './tasks-typing.component.html',
  styleUrls: ['./tasks-typing.component.css'],
})
export class TasksTypingComponent implements OnInit {
  @Output() taskCreated = new EventEmitter<Todo>();

  // @ViewChild('taskInput') taskInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddTask(taskInput: HTMLInputElement) {
    this.taskCreated.emit({
      taskName: taskInput.value,
      // taskName: this.taskInput.nativeElement.value;
    });
    taskInput.value = '';
  }
}
