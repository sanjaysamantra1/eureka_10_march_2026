import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextonly]',
})
export class Textonly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: any) {
    // console.log(event.target.value)
    const value = event.target.value;
    let regex = new RegExp(/^[a-z]+$/);
    if (!value){
      this.myBgColor = '';
      return
    }

    if (!regex.test(value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }
}
