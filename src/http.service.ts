import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {User} from '../src/home-page/home-page.component';
import {Column} from '../src/content/content.component'

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    private readonly _apiUrl = 'http://localhost:5258/api/';

    getAllColumn(){
      return this.http.get(`${this._apiUrl}columns/`);
    }

    postNewColumn(column : Column){
      const body = {nameColumn: column.nameColumn, cards: column.cards};
      return this.http.post(`${this._apiUrl}columns/`, body);
    }

    postCurrentUser(user: User){
      const body = {name: user.name, password: user.password};
      return this.http.post(`${this._apiUrl}user/`, body, {responseType: "text"});
    }
}
