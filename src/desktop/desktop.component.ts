import { Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#067bbe";
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "none";
  }

  ngOnInit() {  }

}
