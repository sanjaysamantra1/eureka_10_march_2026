import { Component } from '@angular/core';
import product_data from '../product-list/product-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    RouterLink
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productArr = product_data;
}
