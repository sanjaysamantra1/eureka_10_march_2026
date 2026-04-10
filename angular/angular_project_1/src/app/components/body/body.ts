import { UserList } from './../user-list/user-list';
import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DatabindingAssignment } from '../databinding-assignment/databinding-assignment';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // DatabindingAssignment
    // Directives
    // MyModal,
    // UserList
    ProductList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
