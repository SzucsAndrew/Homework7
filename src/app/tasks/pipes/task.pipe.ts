import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Task } from '../interfaces/task';

@Pipe({
  name: 'task'
})
export class TaskPipe implements PipeTransform {

  constructor(private authService: AuthService) { }

  transform(task: Task): string {
    const currentUser = this.authService.getUserName();
    const createdBy = task.createdBy === currentUser ? 'Me' : task.createdBy;

    if (!task.isDone) {
      return `${task.name} - ${task.description} (Created: ${createdBy})`;
    }

    if (task.createdBy === task.doneBy) {
      return `${task.name} - ${task.description} (Created and Done by: ${createdBy})`;
    }
    else {
      const doneBy = task.doneBy === currentUser ? 'Me' : task.doneBy;
      return `${task.name} - ${task.description} (Created: ${createdBy} - Done by: ${doneBy})`;
    }
  }
}
