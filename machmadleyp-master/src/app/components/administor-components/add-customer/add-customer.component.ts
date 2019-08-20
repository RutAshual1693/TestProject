import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../../../services/customers.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(public customersService: CustomersService, private router: Router) { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      registrationDate: new FormControl(""),
      mail: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required),
    });
  }
  onSubmit(frm) {
    console.log(frm);
    frm.registrationDate = new Date();
    if (frm.password == frm.confirmPassword) 
    {
      this.router.navigateByUrl('myOnlineStore/administor/customersBase');
      this.customersService.addCustomer(frm);
    }
  
  }

}
