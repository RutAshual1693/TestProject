import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionsComponent implements OnInit {
  
  constructor(public productsService: ProductsService) {

  }
  delete(option) {
    this.productsService.deleteOption(option);
  }
  ngOnInit() {
  }
  editOption(option) {
    this.productsService.editProductOption = option;
  }
  
}
