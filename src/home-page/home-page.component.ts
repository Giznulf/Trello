import { Component, Output, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService} from '../http.service';
import {CurrentUserService} from '../current-user.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [HttpService]
})
export class HomePageComponent implements OnInit {

  name : string = "";
  password : string = "";
  errorLogin : boolean = false;
  home : boolean = true;

  constructor(private router: Router,
              private httpService: HttpService
             /* private currentuserservice: CurrentUserService*/) { }

   checkig() {
    this.newgjob();
  }


   newgjob(user = new User (this.name, this.password)) {
    console.log(user);
    this.httpService.postCurrentUser(user).subscribe({
      next:(data: any) => {
          console.log(data);
          if(data == "Авторизация прошла успешно"){

            this.router.navigate(['/desktop']);

          } else if(data == "Неверный логин или пароль"){

            if(this.errorLogin == false){
              this.errorLogin = !this.errorLogin;
            }
          }
      },
      error: error => console.log(error)
    });
  }


  ngOnInit(){ }

}
export class User{
  constructor(public name:string, public password:string){}
}
