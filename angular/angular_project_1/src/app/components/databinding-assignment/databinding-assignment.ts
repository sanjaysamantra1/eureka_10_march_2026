import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-assignment',
  imports: [FormsModule],
  templateUrl: './databinding-assignment.html',
  styleUrl: './databinding-assignment.css',
})
export class DatabindingAssignment {
  msg: string = 'Hello';

  currentTime: any = '07:10';
  displayGreeting() {
    console.log(this.currentTime);
    const hour = this.currentTime.split(':')[0];
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour > 12 && hour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }
}
