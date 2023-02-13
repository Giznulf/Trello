import { Component } from '@angular/core';
import { UserAuthorizationService } from '../servises/user-authorization.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  name: string = '';
  password: string = '';
  errorLogin: boolean = false;
  home: boolean = true;

  constructor(private userAuthorization: UserAuthorizationService) {}

  checking() {
    this.userAuthorization
      .postCurrentUser(new User(this.name, this.password))
      .subscribe(() => {
        this.errorLogin = this.userAuthorization.errorLogin;
      }).unsubscribe;
  }
}

