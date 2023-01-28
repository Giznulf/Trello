import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { ColumnService } from './services/column.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private columnServise: ColumnService) {}

  addColumnInactive: boolean = true;
  addColumnActive: boolean = false;
  nameNewColumn: string = '';
  idNewColumn: any;
  cards?: string[];
  columns?: Column[];

  changeVisibilityNewColumnCreationForm() {
    this.addColumnInactive = !this.addColumnInactive;
    this.addColumnActive = !this.addColumnActive;
  }

  createNewColumn(
    column = new Column(this.idNewColumn, this.nameNewColumn, this.cards)
  ) {
    this.columnServise.createNewColumn(column).subscribe(() => {
      this.ngOnInit();
    });
    this.nameNewColumn = '';
  }

  ngOnInit() {
    this.columnServise
      .getAllColumn()
      .pipe(
        map((columns) => {
          this.columns = columns;
          console.log(this.columns);
        })
      )
      .subscribe(() => {});
  }
}
export class Column {
  constructor(
    public id: number,
    public nameColumn: string,
    public cards?: string[]
  ) {}
}
