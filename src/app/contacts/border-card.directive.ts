import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#ffffff';
  private defaultColor: string = '#0277bd';

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
  }

  @Input('appBorderCard') borderColor: string | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
