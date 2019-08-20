import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CustomersService } from '../../../services/customers.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private customersService: CustomersService) { }

  form1;
  ngOnInit() {

    this.form1 = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit(frm) {
    //$('#frm').validator();
    console.log(frm);
    //frm.registrationDate = new Date().toString();
    var user = this.customersService.listCustomers.find(x => x["mail"] == frm.email && x["password"] == frm.password)
    if (user != null)
      sessionStorage.setItem('user', JSON.stringify(user));

  }

}
