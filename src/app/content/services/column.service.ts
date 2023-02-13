import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { HttpService } from 'src/app/shared/services/http.service';
import { Column } from '../models/column';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  constructor(
    private httpService: HttpService,
    private toastr: ToastrService
  ) {}

  createNewColumn(column: Column) {
    return this.httpService
      .post(column, 'columns/')
      .pipe(
        catchError(async () => this.toastr.error('Ошибка на стороне сервера.'))
      );
  }

  getAllColumn() {
    return this.httpService
      .get('columns/')
      .pipe(
        catchError(async () => this.toastr.error('Ошибка на стороне сервера.'))
      );
  }
}
