import { Component, signal } from '@angular/core';
import { MaterialDemo } from './components/material-demo/material-demo';

@Component({
  selector: 'app-root',
  imports: [MaterialDemo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_project_2');

  add(a: number, b: number) {
    return a + b;
  }

  isEven(num: number) {
    return num % 2 === 0;
  }

  sumOfDigits(num: number) {
    let sum = 0;
    while (num != 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  cars = ['Tata', 'Honda'];

  addNewCar(newCar: string) {
    this.cars.push(newCar);
  }

  processData(data: any) {
    console.log('Processing data:', data);
    return data.length;
  }
  fetchData() {
    const data = ['item1', 'item2', 'item3'];
    return this.processData(data);
  }
}
