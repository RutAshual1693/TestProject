import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { SalesService } from '../../../services/sales.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public options: Array<object> = new Array<object>();
  constructor(private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private salesService: SalesService
  ) { }
  quantity = 1;
  ngOnInit() {
    //let p = this.shoppingCartService.shoppingCartList.find(x => x["_id"] == this.productsService.showProductDetails["_id"]);
    //if (p != null)
    //  this.quantity = p["quantity"];
  }

  checkQuantity(q) {
    //this.quantity = parseInt(q);
    if (this.quantity <= 0)
      this.quantity = 1;
    else
      //this.quantity = parseInt(q);
      this.quantity += q;
  }
  //addToCart() {
  //  this.shoppingCartService.addProductToCart(this.productsService.showProductDetails, this.quantity, this.options)
  //}
}
