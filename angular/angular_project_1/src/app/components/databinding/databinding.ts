import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  myName = 'Virat Kohli';
  img_url = 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png';
  flag = true;
  col_span = 2;
  num1 = 10;
  num2 = 20;

  toggleFlag() {
    this.flag = !this.flag;
  }

  addResult: number | undefined ;
  addition(val1: string, val2: string) {
    this.addResult = +val1 + +val2;
  }
}
