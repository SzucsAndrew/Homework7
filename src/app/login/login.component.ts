import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  invalidUser: boolean = false;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authservice.isLoggedIn()) {
      this.navigateToTasks();
    }
  }

  login() {
    if (this.authservice.login(this.userName)) {
      this.invalidUser = false;
      this.navigateToTasks();
    }
    else {
      this.invalidUser = true;
    }
  }

  private navigateToTasks() {
    this.router.navigateByUrl('/tasks');
  }
}
