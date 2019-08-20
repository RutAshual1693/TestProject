import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordersList = []; user;
  constructor(private http: HttpClient) {
    this.orders();
  }
  orders() {
    this.getOrdersList().subscribe(
      (data: Array<object>) => {
        this.ordersList = data;
      });
  }
  getOrdersList(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/getOrdersList');
  }
  addOrders(order) {
    this.http.post<object[]>("/addOrder", order).subscribe(
      (data: object[]) => this.ordersList = data
    );
  }  
}
