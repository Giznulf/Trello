import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [HttpService]
})
export class ContentComponent implements OnInit {

  constructor(private httpService: HttpService
   /* private currentuserservice: CurrentUserService*/) { }

  addColumnInactive: boolean = true;
  addColumnActive: boolean = false;
  nameNewColumn: string = "";
  idNewColumn: any;
 // addCardInactive: boolean = true;
  addCardInactive: Condition = new Condition (true);
  nameNewCard: string = "";
  cards?: string[];
  columns?: Column[];


  changeVisibilityNewColumnCreationForm(){
    this.addColumnInactive = !this.addColumnInactive;
    this.addColumnActive = !this.addColumnActive;
  }
  changeVisibilityNewCardCreationForm(id: number){
    console.log(id);
    this.addCardInactive.id = !this.addCardInactive.id;
  }


  createNewColumn(column = new Column (this.idNewColumn,this.nameNewColumn, this.cards)){
    console.log(column);
    this.httpService.postNewColumn(column).subscribe({
      next:(data: any) => {console.log(data); this.ngOnInit();},
      error: error => console.log(error)
    });
  }


  ngOnInit() {
    this.httpService.getAllColumn().subscribe({
      next:(data: any) => {
        console.log(data);
        this.columns = data;
      },
      error: error => console.log(error)
    });
  }


}
export class Column{
  constructor(public id: number, public nameColumn: string, public cards?: string[]){}
}
class Condition{
  constructor(public id: boolean){}
}
