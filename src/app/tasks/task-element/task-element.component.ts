import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.scss']
})
export class TaskElementComponent implements OnInit {
  @Input() task!: Task;
  @Output() taskChange = new EventEmitter<Task>();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doneTask() {
    this.task.isDone = true;
    this.task.doneBy = this.authService.getUserName();
    this.taskChange.emit(this.task);
  }
}
