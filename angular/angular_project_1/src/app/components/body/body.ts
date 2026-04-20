import { HttpDemo1 } from './../http-demo1/http-demo1';
import { UserList } from './../user-list/user-list';
import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DatabindingAssignment } from '../databinding-assignment/databinding-assignment';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { ProductList } from '../product-list/product-list';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Products } from '../products/products';
import { MathDemo } from '../math-demo/math-demo';
import { StockList } from '../stock-list/stock-list';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeList } from '../employee-list/employee-list';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // DatabindingAssignment
    // Directives
    // MyModal,
    // UserList
    // ProductList
    // PipesDemo
    // ParentDemo
    // Products
    // MathDemo
    // HttpDemo1
    // StockList
    // CommentList
    EmployeeList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
