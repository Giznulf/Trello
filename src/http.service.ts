import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {User} from '../src/home-page/home-page.component'

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }


    postData(user: User){
      const body = {name: user.name, password: user.password};
      return this.http.post('http://localhost:5258/api/user/', body, {responseType: "text"});
    }
}
