import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  name : string = "";

  public count$ = new Subject<string>();

  public currentUser() {
     this.count$.next(this.name);
  }
}
