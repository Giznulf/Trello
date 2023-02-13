import { Input, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { CardService } from '../services/card.service';
import { ContentComponent } from '../content.component';
import { Column } from '../models/column';
import { Card } from '../models/card';

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

  @Input() column!: Column;

  popupMenuColumn: boolean = false;
  addCardInactive: boolean = true;
  idNewCard: number | undefined;
  nameNewCard: string = '';
  cards?: Card[];

  createNewCard(
    card = new Card(this.idNewCard, this.nameNewCard, this.column.id as number)
  ) {
    this.cardService.createNewCard(card).subscribe(() => {
      this.getAllCardsThisColumn();
    });
    this.nameNewCard = '';
  }

  deleteColumn(id: number) {
    this.cardService.deleteColumn(id).subscribe(() => {
      this.content.getAllColumn();
    });
  }

  getAllCardsThisColumn() {
    this.cardService
      .getAllCardsThisColumn(this.column.id as number)
      .pipe(
        map((cards) => {
          this.cards = cards;
        })
      )
      .subscribe(() => {});
  }

  ngOnInit() {
    this.getAllCardsThisColumn();
  }
}
