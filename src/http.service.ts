import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {User} from '../src/home-page/home-page.component'

@Injectable()
export class HttpService{

    constructor(private http: HttpClient
                /*private user: Users*/){ }

   /* users = 'assets/data/users.json';
    //user = '';

    getData(){
        return this.http.get(this.users);
    }*/
    postData(usera: User){
      const body = {name: usera.name, password: usera.password};
      return this.http.post('http://localhost:5258/api/Users1', body);
    }
}
