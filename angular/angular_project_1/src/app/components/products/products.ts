import { Component } from '@angular/core';
import product_data from '../product-list/product-data';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productArr = product_data;
}
