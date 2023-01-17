import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  addColumnInactive : boolean = true;
  addColumnActive : boolean = false;
  addColumnInactive1 : boolean = true;


  addingNewColumn(){
    this.addColumnInactive = !this.addColumnInactive;
    this.addColumnActive = !this.addColumnActive;
    this.addColumnInactive1 = !this.addColumnInactive1;
  }


  ngOnInit() {
  }

}
