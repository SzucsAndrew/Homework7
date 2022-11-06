import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskName = "";
  taskDescription = "";
  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
  }

  createTask() {
    const task = {
      name: this.taskName,
      description: this.taskDescription,
      isDone: false,
      createdBy: this.authService.getUserName()
    };

    const allTasks = this.storageService.getListData('TasksTable');
    allTasks.push(task);

    this.storageService.saveListData('TasksTable', allTasks);
  }
}
