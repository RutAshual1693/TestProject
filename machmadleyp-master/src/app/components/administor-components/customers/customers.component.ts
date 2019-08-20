import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(public customersService: CustomersService) { }

  ngOnInit() {
  }
  delete(customer) {
    this.customersService.delete(customer["_id"]);
  }
  editcustomerClicked(customer) {
    this.customersService.editCustomer = customer;
  }
}
