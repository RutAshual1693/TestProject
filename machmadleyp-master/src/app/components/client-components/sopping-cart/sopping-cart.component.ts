import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-sopping-cart',
  templateUrl: './sopping-cart.component.html',
  styleUrls: ['./sopping-cart.component.css']
})
export class SoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }
  less(product, i) {
    this.shoppingCartService.removeProductFromCart(product, i, -1);
  }
}
