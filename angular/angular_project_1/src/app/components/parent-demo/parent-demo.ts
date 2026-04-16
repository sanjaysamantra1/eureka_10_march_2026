import { Component, DoCheck, ElementRef, OnChanges, OnInit } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';
import { Cart } from '../../omponents/cart/cart';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo, Child2Demo, FormsModule, Cart],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo {
  a: number;
  parentCourseName = '';
  cartItems = [{ name: 'Book', price: 299 }];
  addItem() {
    this.cartItems.push({ name: 'Pen', price: 19 });
  }

  receiveCourseData(courseName: string) {
    this.parentCourseName = courseName;
  }

  constructor(private ele: ElementRef) {
    // Dependency Injection
    // ele = new ElementRef();
    this.a = 100; // initializing class variables
    console.log('Parent constructor');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
