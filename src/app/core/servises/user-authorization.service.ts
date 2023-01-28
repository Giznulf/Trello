import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { HttpService } from 'src/app/shared/services/http.service';
import { User } from '../login-page/login-page.component';

@Injectable({
  providedIn: `root`,
})
export class UserAuthorizationService {
  constructor(
    private router: Router,
    private httpService: HttpService,
    private toastr: ToastrService
  ) {}

  postCurrentUser(user: User) {
    return this.httpService
      .postResponseTypeText(user, 'user/')
      .pipe(
        map((data) => {
          console.log(data);
          if (data == 'Авторизация прошла успешно') {
            this.router.navigate(['/desktop']);
          } else if (data == 'Неверный логин или пароль') {
            if (false == false) {
              return;
            }
          }
        }),
        catchError(async () =>
          console.log(this.toastr.error('Ошибка на стороне сервера.'))
        )
      )
      .subscribe((x) => {});
  }
}
