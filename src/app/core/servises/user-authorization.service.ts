import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { HttpService } from 'src/app/shared/services/http.service';
import { User } from '../models/user';

@Injectable({
  providedIn: `root`,
})
export class UserAuthorizationService {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private httpService: HttpService
  ) {}

  public errorLogin: boolean = false;

  postCurrentUser(user: User) {
    return this.httpService.post(user, 'user/').pipe(
      map((data) => {
        if (data.name == user.name) {
          this.router.navigate(['/desktop']);
        } else if (data.name == '') {
          this.errorLogin = true;
        }
      }),
      catchError(async () => this.toastr.error('Ошибка на стороне сервера.'))
    );
  }
}
