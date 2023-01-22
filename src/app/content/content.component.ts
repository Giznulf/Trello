import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private httpService: HttpService) {}

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
    console.log(column);
    this.httpService.postNewColumn(column).subscribe({
      next: (data: any) => {
        console.log(data);
        this.ngOnInit();
      },
      error: (error) => console.log(error),
    });
    this.nameNewColumn = '';
  }

  ngOnInit() {
    this.httpService.getAllColumn().subscribe({
      next: (data: any) => {
        console.log(data);
        this.columns = data;
      },
      error: (error) => console.log(error),
    });
  }
}
export class Column {
  constructor(
    public id: number,
    public nameColumn: string,
    public cards?: string[]
  ) {}
}
