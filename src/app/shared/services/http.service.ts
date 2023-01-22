import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from '../../core/login-page/login-page.component';
import { Column } from 'src/app/content/content.component';
import { Card } from 'src/app/content/columns/columns.component';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private readonly _apiUrl = 'http://localhost:5258/api/';

  getAllColumn() {
    return this.http.get(`${this._apiUrl}columns/`);
  }

  postNewColumn(column: Column) {
    const body = { nameColumn: column.nameColumn, cards: column.cards };
    return this.http.post(`${this._apiUrl}columns/`, body);
  }

  deleteColumn(id: string) {
    return this.http.delete(`${this._apiUrl}columns/${id}`);
  }

  getAllCardsThisColumn(columnId: string) {
    return this.http.get(`${this._apiUrl}cards/${columnId}`);
  }

  postNewCard(card: Card) {
    const body = { nameCard: card.nameCard, columnId: card.columnId };
    return this.http.post(`${this._apiUrl}cards/`, body);
  }

  postCurrentUser(user: User) {
    const body = { name: user.name, password: user.password };
    return this.http.post(`${this._apiUrl}user/`, body, {
      responseType: 'text',
    });
  }
}
