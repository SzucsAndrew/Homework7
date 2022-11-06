import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskElementComponent } from './task-element/task-element.component';
import { TaskDetailsPipe } from './pipes/task.details.pipe';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    TasksComponent,
    CreateTaskComponent,
    TaskElementComponent,
    TaskDetailsPipe
  ],
  exports: [
    TasksComponent,
    CreateTaskComponent,
    TaskElementComponent,
    TaskDetailsPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
