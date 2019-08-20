import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';


@Component({
  selector: 'app-edit-product-option',
  templateUrl: './edit-product-option.component.html',
  styleUrls: ['./edit-product-option.component.css']
})
export class EditProductOptionComponent implements OnInit {

  constructor(public productsService: ProductsService) {
  }
  list: Array<number> = [];
  productOption= this.productsService.editProductOption;
  ngOnInit() {

    for (var i = 0; i < this.productsService.editProductOption["values"].length; i++) {
     this.list.push(0);
    }
    this.list.push(1);
  }
  addClicked(i) {
    this.list[i] = 0;
    this.productOption["values"].push("");
    this.list.push(1);
  }
  deleteClicked(i) {
    this.productOption["values"].splice(i, 1);
    this.list.splice(i, 1);
  }
  clicked() {
    for (var i = 0; i < this.productOption["values"].length; i++) {
      if (this.productOption["values"][i] == "") {
        this.productOption["values"].splice(i, 1);
        i--;
      }
    }
    this.productsService.d(this.productOption);
  }  
}
