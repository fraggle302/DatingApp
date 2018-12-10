import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authservice: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  Login() {
    this.authservice.Login(this.model).subscribe(next => {
      this.alertify.success('Logged in succesfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedin() {
    return this.authservice.LoggedIn();
  }

  Logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
