import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import { ExcelService } from '../../../services/excel.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService, private excelService: ExcelService) {

  }

  ngOnInit() {
  
  }

}
