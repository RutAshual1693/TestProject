import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public http: HttpClient, private cart: ShoppingCartService) { }

  charge(stripeToken, user): Observable<object> {
    //console.log(this.cart.shoppingCartList.forEach(x => x["name"]))
    return this.http.post<object>('/charge', { 'stripeToken': stripeToken, 'user': user, 'cart': this.cart.shoppingCartList, 'finalPrice': this.cart.finalPrice })
  }
}
