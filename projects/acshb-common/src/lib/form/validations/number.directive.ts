import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[acshbNumber]'
})
export class NumberDirective {
  private element: ElementRef;

  constructor(el: ElementRef) {
    this.element = el;
  }

   @HostListener('input', ['$event']) onValueChange(e: any) {
    const isNumber = isNaN(parseInt(e.target.value, 10));

    if (isNumber) {
        this.element.nativeElement.value = this.element.nativeElement.value.slice(this.element.nativeElement.value.length, 1);
      }
  }
}
