import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DatabindingAssignment } from '../databinding-assignment/databinding-assignment';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // DatabindingAssignment
    // Directives
    MyModal,
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
