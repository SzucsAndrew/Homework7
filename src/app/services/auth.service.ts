import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: string | null = null;

  constructor(private storageService: StorageService) { }

  login(userName: string): boolean {
    const usersTable = this.storageService.getListData<string>('UsersTable');
    const user = usersTable?.find(x => x == userName);
    if (user != null) {
      this.currentUser = user;
      return true;
    }
    else {
      this.currentUser = null;
      return false;
    }
  }

  isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  logout(): boolean {
    if (this.currentUser != null) {
      this.currentUser = null;
    }
    return true;
  }

  getUserName(): string | null {
    return this.currentUser;
  }
}
