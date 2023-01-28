import { Input, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { CardService } from '../services/card.service';
import { ContentComponent } from '../content.component';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
})
export class ColumnsComponent implements OnInit {
  constructor(
    private cardService: CardService,
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
    this.cardService.createNewCard(card).subscribe(() => {
      this.ngOnInit();
    });
    this.nameNewCard = '';
  }

  deleteColumn(id: string) {
    this.cardService.deleteColumn(id).subscribe(() => {
      this.content.ngOnInit();
    });
  }

  ngOnInit() {
    this.cardService
      .getAllCardsThisColumn(this.column.id)
      .pipe(
        map((cards) => {
          this.cards = cards;
          console.log(this.cards);
        })
      )
      .subscribe(() => {});
  }
}
export class Card {
  constructor(
    public id: number,
    public nameCard: string,
    public columnId: number
  ) {}
}
