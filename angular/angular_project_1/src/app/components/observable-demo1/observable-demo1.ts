import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  ngOnInit() {
    // this.from_demo();
    this.interval_demo();
  }
  num = interval(1000);
  even_num = this.num.pipe(filter((val) => val % 2 == 0));
  num_square = this.num.pipe(map((val) => val * val));

  currentTime$ = interval(1000).pipe(map(val=>new Date().toLocaleTimeString()));

  interval_demo() {
    this.num.subscribe((val) => console.log('Value: ', val));
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    let carsObservable = from(cars);
    console.log(carsObservable);

    carsObservable.subscribe({
      next: (nextValue) => console.log('next value: ', nextValue),
      error: (err) => console.log('Error: ', err),
      complete: () => console.log('All Data Received'),
    });
  }
}
