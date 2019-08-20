import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product-option',
  templateUrl: './add-product-option.component.html',
  styleUrls: ['./add-product-option.component.css']
})
export class AddProductOptionComponent implements OnInit {
  productOption: object = { name: "", values: [] };
  constructor(private productsService: ProductsService, private router: Router) { }
  list: Array<number> = [];
  ngOnInit() {
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
      if (this.productOption["values"][i] == "")
      {
        this.productOption["values"].splice(i, 1);
        i--;
      }
   
    }
    this.productsService.addProductOption(this.productOption);
    this.router.navigateByUrl('myOnlineStore/administor/productOptionsBase');
  }
}
