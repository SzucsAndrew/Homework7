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
    if (this.getListData<string>('UsersTable') === null) {
      const users = ['Test1', 'Test2', 'Test3'];
      this.saveListData('UsersTable', users);
      const tasks = [
        { name: 'asd', description: 'leírás', isDone: true, createdBy: 'Test1', doneBy: 'Test1' },
        { name: 'asd2', description: 'leírás2', isDone: true, createdBy: 'Test1', doneBy: 'Test2' },
        { name: 'asd3', description: 'leírás3', isDone: true, createdBy: 'Test2', doneBy: 'Test2' },
        { name: 'asd4', description: 'leírás4', isDone: false, createdBy: 'Test3', doneBy: null },
        { name: 'asd5', description: 'leírás5', isDone: false, createdBy: 'Test1', doneBy: null }
      ];
      this.saveListData('TasksTable', tasks);
    }
  }
}
