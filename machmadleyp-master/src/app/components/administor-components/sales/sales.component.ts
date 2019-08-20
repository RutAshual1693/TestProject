import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private salesService: SalesService) { }

  ngOnInit() {
  }
  delete(sale) {
    this.salesService.deleteSale(sale);
  }
  editSaleClicked(sale) {
    this.salesService.editSale = sale;

  }
}
