import { Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private element: ElementRef, private renderer: Renderer2){
    //this.setBackground("#067bbe");
  }

  body : any = document.getElementById("body");

 // vall : string = "#067bbe";

  @HostListener("click") onMouseClick() {
    this.setBackground(" fixed url(assets/images/photo-1560471831-b434a204567d.jpg)");
}



private setBackground(val: string) {
    this.renderer.setStyle(this.body, "background", val);
}
}
