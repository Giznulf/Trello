import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { HttpService } from 'src/app/shared/services/http.service';
import { Card } from '../columns/columns.component';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(
    private httpService: HttpService,
    private toastr: ToastrService
  ) {}

  deleteColumn(id: string) {
    return this.httpService
      .delete(`columns/${id}`)
      .pipe(
        catchError(async () => this.toastr.error('Ошибка на стороне сервера.'))
      );
  }

  getAllCardsThisColumn(columnId: string) {
    return this.httpService
      .get(`cards/${columnId}`)
      .pipe(
        catchError(async () =>
          console.log(this.toastr.error('Ошибка на стороне сервера.'))
        )
      );
  }

  createNewCard(card: Card) {
    return this.httpService
      .post(card, 'cards/')
      .pipe(
        catchError(async () => this.toastr.error('Ошибка на стороне сервера.'))
      );
  }
}
