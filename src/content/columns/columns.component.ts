import { Input, Component, OnInit } from '@angular/core';
import { HttpService} from '../../http.service';
import { Column } from '../content.component';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
  providers: [HttpService]
})
export class ColumnsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  @Input() columnName: any;

  addColumnInactive: boolean = true;
  addColumnActive: boolean = false;
  nameNewColumn: string = "";
  idNewColumn: any;
  addCardInactive: boolean = true;
  //addCardInactive: Condition = new Condition (true);
  nameNewCard: string = "";
  cards?: string[];
  columns?: Column[];


  changeVisibilityNewColumnCreationForm(){
    this.addColumnInactive = !this.addColumnInactive;
    this.addColumnActive = !this.addColumnActive;
  }
  changeVisibilityNewCardCreationForm(id: number){
    console.log(id);
    this.addCardInactive = !this.addCardInactive;
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
