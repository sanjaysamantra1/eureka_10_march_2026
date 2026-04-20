import { Component, inject, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeService = inject(EmployeeService);
  employeeArr: any = signal([]);

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((response: any) => {
      console.log(response);
      this.employeeArr.set(response);
    });
  }
}
