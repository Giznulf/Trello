import { Component } from '@angular/core';
import { UserAuthorizationService } from '../servises/user-authorization.service';

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

  checkig() {
    this.userAuthorization.postCurrentUser(new User(this.name, this.password)).unsubscribe;
  }

}
export class User {
  constructor(public name: string, public password: string) {}
}
