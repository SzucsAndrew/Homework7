import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  allTasks: Task[] = [];
  notCompletedTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.allTasks = this.storageService.getListData<Task>('TasksTable');
    this.notCompletedTasks = this.allTasks.filter(x => !x.isDone);
    this.completedTasks = this.allTasks.filter(x => x.isDone);
  }

  doneTaks(task: Task) {
    this.storageService.saveListData('TasksTable', this.allTasks);
    this.notCompletedTasks = this.notCompletedTasks.filter(x => x != task);
    this.completedTasks.push(task);
  }

  logOut() {
    this.authService.logout();
  }
}
