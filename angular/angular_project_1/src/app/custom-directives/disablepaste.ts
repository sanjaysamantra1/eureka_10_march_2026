import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablepaste]',
})
export class Disablepaste {
  @HostListener('paste', ['$event'])
  onPaste(event: any) {
    event.preventDefault();
  }
}
