import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

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

  constructor(private router: Router, private httpService: HttpService) {}

  checkig() {
    this.newgjob();
  }

  newgjob(user = new User(this.name, this.password)) {
    console.log(user);
    this.httpService.postCurrentUser(user).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data == 'Авторизация прошла успешно') {
          this.router.navigate(['/desktop']);
        } else if (data == 'Неверный логин или пароль') {
          if (this.errorLogin == false) {
            this.errorLogin = !this.errorLogin;
          }
        }
      },
      error: (error) => console.log(error),
    });
  }
}
export class User {
  constructor(public name: string, public password: string) {}
}
