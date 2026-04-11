import { Component } from '@angular/core';
import productData from './product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { GOOD_MORNING } from '../../constants/message_constants';
import { FormsModule } from '@angular/forms';
import { Textonly } from '../../custom-directives/textonly';
import { Disablepaste } from '../../custom-directives/disablepaste';

@Component({
  selector: 'app-product-list',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    FormsModule,
    Textonly,
    Disablepaste
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;
  faStar = faStar;
  p = 1;

  filterProducts(event:any) {
    const searchText = event.target.value;
    this.productArr = productData.filter((product) => {
      return product.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  sortAsc() {
    this.productArr.sort((p1, p2) => p1.price - p2.price);
  }
  sortDesc() {
    this.productArr.sort((p1, p2) => p2.price - p1.price);
  }

  openSweetAlert() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openSnackbar() {
    new Snackbar(GOOD_MORNING, {
      position: 'top-center',
      theme: 'light',
      timeout: 5000,
      actionText: 'X',
    });
  }
}
