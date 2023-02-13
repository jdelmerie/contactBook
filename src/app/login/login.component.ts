import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string = "You're not connected. (admin/admin)";
  username: string = "";
  password: string = "";
  isAuth: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  setMessage() {
    if (this.auth.isLoggedIn) this.message = "You're connected";
    else this.message = "Username or password incorrect.";
  }

  login() {
    this.message = 'Connection attempt in progress...';
    this.auth.login(this.username, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        this.isAuth = this.auth.isLoggedIn;
        if (isLoggedIn) {
          this.router.navigateByUrl('/liste');
        } else {
          this.password = ''; 
          this.router.navigateByUrl('/login');
        }
      })
  }

  logout() {
    this.auth.logout();
    this.message = "You're not connected.";
  }

}
