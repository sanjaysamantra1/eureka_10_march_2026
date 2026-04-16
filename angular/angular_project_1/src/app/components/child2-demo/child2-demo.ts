import { Component, ContentChild, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs: ['aChild2'],
})
export class Child2Demo {
  aChild2: any;
  b: number = 200;

  @ViewChild('myInput') myInput: any;
  @ContentChild('parentContent') parentContent: any;

  constructor() {
    console.log('child-2 constructor');
    console.log(this.myInput);
    console.log(this.parentContent);
  }
  ngAfterViewInit() {
    console.log('child-2 ngAfterViewInit');
    console.log(this.myInput);
    this.myInput.nativeElement.style.color = 'blue';
    this.myInput.nativeElement.focus();
  }
  ngAfterContentInit() {
    this.parentContent.nativeElement.style.color = 'red';
  }
}
