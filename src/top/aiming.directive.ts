import { Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appAiming]'
})
export class AimingDirective {

  constructor(private element: ElementRef, private renderer: Renderer2){

    this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
}

@HostListener("mouseenter") onMouseEnter() {
    this.setFontWeight("rgba(255, 255, 255, 0.3)");
}

@HostListener("mouseleave") onMouseLeave() {
    this.setFontWeight("");
}

private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, "background-color", val);
}
}
