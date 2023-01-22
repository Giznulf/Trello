import { Input, Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { ContentComponent } from '../content.component';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
})
export class ColumnsComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    private content: ContentComponent
  ) {}

  @Input() column: any;

  popupMenuColumn: boolean = false;
  addCardInactive: boolean = true;
  idNewCard: any;
  nameNewCard: string = '';
  cards?: Card[];

  createNewCard(
    card = new Card(this.idNewCard, this.nameNewCard, this.column.id)
  ) {
    console.log(card);
    this.httpService.postNewCard(card).subscribe({
      next: (data: any) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error) => console.log(error),
    });
    this.nameNewCard = '';
  }

  deleteColumn(id: string) {
    this.httpService.deleteColumn(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.content.ngOnInit();
      },
      error: (error) => console.log(error),
    });
  }

  ngOnInit() {
    this.httpService.getAllCardsThisColumn(this.column.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.cards = data;
      },
      error: (error) => console.log(error),
    });
  }
}
export class Card {
  constructor(
    public id: number,
    public nameCard: string,
    public columnId: number
  ) {}
}
