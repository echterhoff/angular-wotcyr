import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format: string;
  @Input('appInputFormat') implicitParam: string;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur(){
    let value: string = this.el.nativeElement.value;

    if (this.implicitParam == 'upper' || this.format == 'upper')
      this.el.nativeElement.value = value.toUpperCase();
    else if (this.implicitParam == 'lower' || this.format == 'lower')
      this.el.nativeElement.value = value.toLowerCase();
    else 
      this.el.nativeElement.value = value;
  }

}
