import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.buildDemoData();
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public saveListData(key: string, list: Array<any>) {
    const convertedList = JSON.stringify(list);
    this.saveData(key, convertedList);
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  public getListData<T>(key: string): Array<T> {
    const list = this.getData(key);
    return list == null
      ? []
      : JSON.parse(list);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  private buildDemoData() {
    if (this.getListData<string>('UsersTable').length === 0) {
      const users = ['Test1', 'Test2', 'Test3'];
      this.saveListData('UsersTable', users);
      const tasks = [
        { name: 'Task 1', description: 'Finish the homework.', isDone: true, createdBy: 'Test1', doneBy: 'Test1' },
        { name: 'Task 2', description: 'Finish the housework.', isDone: true, createdBy: 'Test1', doneBy: 'Test2' },
        { name: 'Task 3', description: 'Feed the dog.', isDone: true, createdBy: 'Test2', doneBy: 'Test2' },
        { name: 'Task 4', description: 'Wash the plates.', isDone: false, createdBy: 'Test3', doneBy: null },
        { name: 'Task 5', description: 'Learn about Angular', isDone: false, createdBy: 'Test1', doneBy: null }
      ];
      this.saveListData('TasksTable', tasks);
    }
  }
}
