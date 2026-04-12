import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule,RemainingPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName: string = 'sAchIN tEnDuLKaR';
  salary: number = 5000;
  dateObj = new Date();
  user = { name: 'Akhil', age: 21, address: 'Virginia' };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Mahindra'];

  msg = 'Good Morning';
}
