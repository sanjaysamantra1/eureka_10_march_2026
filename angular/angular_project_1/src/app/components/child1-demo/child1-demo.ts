import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a', 'b'],
  outputs: ['courseEvent'],
})
export class Child1Demo {
  a: any;
  b: any;
  courseName = 'Angular';

  courseEvent = new EventEmitter();
  sendDataToParent() {
    this.courseEvent.emit(this.courseName);
  }

  constructor() {
    console.log('Child Constructor');
  }
  ngOnChanges(myChanges:any) { // N times
    console.log('Child ngOnChanges',myChanges);
  }
  ngOnInit() {
    console.log('Child ngOnInit');
  }
  ngDoCheck() {
    console.log('Child ngDoCheck');
  }
}
