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

  constructor(/*private router: Router,*/
              private httpService: HttpService
             /* private currentuserservice: CurrentUserService*/) { }

  checkig(){
    this.ngOnInit();

/*
    for(let i = 0; i < this.users.length; i++){

      if(this.name == this.users[i].name && this.password == this.users[i].password){
        this.currentuserservice.name = this.users[i].name;
        this.router.navigate(['/desktop']);
        return;

      } else if(i === this.users.length - 1){

        if(this.errorLogin == false){
          this.errorLogin = !this.errorLogin;
        }
      }
    }*/
  }

  ngOnInit(user = new User (this.name, this.password)) {
    console.log(user);
   // this.httpService.getData().subscribe((data: any) => this.users=data["users"]);
   this.httpService.postData(user).subscribe({
    next:(data: any) => {console.log(data)},
    error: error => console.log(error)
});
   //((data: any) => this.users=data["users"]);
  }

}
export class User{
  constructor(public name:string, public password:string){}
}
