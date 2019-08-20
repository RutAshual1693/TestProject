import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private customersService: CustomersService) { }

  form;
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      registrationDate: new FormControl(""),
      mail: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),
    });
    this.form.setValue({
      firstName: this.customersService.editCustomer["firstName"],
      lastName: this.customersService.editCustomer["lastName"],
      registrationDate: this.customersService.editCustomer["registrationDate"],
      mail: this.customersService.editCustomer["mail"], password: this.customersService.editCustomer["password"],
      confirmPassword: this.customersService.editCustomer["confirmPassword"]
    });
  }
  onSubmit(frm) {
    this.customersService.edit(frm);

  }
}
