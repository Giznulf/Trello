import { Component, OnInit, Input} from '@angular/core';
import {CurrentUserService} from '../../current-user.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  workspaces : boolean = false;
  recent : boolean = false;
  favourites : boolean = false;
  templates : boolean = false;
  onFocusHomePage : boolean = false;
  currentElem = null;

  constructor(private currentuserservice: CurrentUserService) { }

  identificator = this.currentuserservice.name.substring(0,1).toUpperCase();

  callingSubmenu(ev : any){

    switch(ev.target.id){
      case "workspaces" : this.workspaces = !this.workspaces;
      this.recent = false;
      this.favourites = false;
      this.templates = false;
      break;
      case "recent" : this.recent = !this.recent;
      this.workspaces = false;
      this.favourites = false;
      this.templates = false;
      break;
      case "favourites" : this.favourites = !this.favourites;
      this.workspaces = false;
      this.recent = false;
      this.templates = false;
      break;
      case "templates" : this.templates = !this.templates;
      this.workspaces = false;
      this.favourites = false;
      this.recent = false;
      break;
      default :
      this.workspaces = false;
      this.favourites = false;
      this.recent = false;
      this.templates = false;
    }
    console.log(ev.target);
    console.log(ev.target.id);
  }

  ngOnInit() {
  }

}
