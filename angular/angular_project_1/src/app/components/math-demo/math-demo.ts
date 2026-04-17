import { Component } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-math-demo',
  imports: [],
  templateUrl: './math-demo.html',
  styleUrl: './math-demo.css',
})
export class MathDemo {
  constructor(private mathService: MathService) {}

  ngOnInit() {
    console.log(this.mathService.sum([10, 20, 30, 40, 50]));
    console.log(this.mathService.average([10, 20, 30, 40, 50]));
    console.log(this.mathService.indexOfMax([10, 20, 60, 40, 50]));
  }
}
