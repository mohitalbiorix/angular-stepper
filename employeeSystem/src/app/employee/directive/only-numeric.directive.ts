import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumeric]'
})
export class OnlyNumericDirective {

  constructor(
    private el : ElementRef
  ) { }


    @HostListener('input') onlyNumeric(){
      const inputValue = this.el.nativeElement.value;
      this.el.nativeElement.value = inputValue.replace(/[^0-9]*/g , '')
    }

}
