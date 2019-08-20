import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CustomersService } from '../../../services/customers.service';
declare var $: any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private customersService: CustomersService) { }
  form;
  ngOnInit() {
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.form = new FormGroup({
      registrationDate: new FormControl(""),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      mail: new FormControl("", [Validators.required, Validators.email]),
      numberPhone: new FormControl("", [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(9), Validators.maxLength(10)]),
      adress: new FormGroup({
        street: new FormControl("", Validators.required),
        city: new FormControl("", Validators.required),
        numHouse: new FormControl("", [Validators.required, Validators.pattern("[0-9]+")]),
        postalCode: new FormControl("", [Validators.required, Validators.pattern("[0-9]+")]),
      }),

      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9 ]?[a-zA-Z ]+[0-9]+[a-zA-Z0-9 ]?|[a-zA-Z0-9 ]?[0-9]+[a-zA-Z ]+[a-zA-Z0-9 ]?')]),
      confirmPassword: new FormControl("", Validators.required),
    });
  }
  confirmPassword(elementId, spanId, inputId) {
    let a = document.getElementById("inputSuccess2")["value"];
    let b = document.getElementById("inputSuccess1")["value"];
    if (a == b)
      this.valid(elementId, spanId);
    else {
      this.invalid(elementId, spanId);
    }
  }
  valid(elementId, spanId) {
    $(elementId).removeClass("form-group has-error has-feedback");
    $(spanId).removeClass("glyphicon glyphicon-remove form-control-feedback");
    $(elementId).addClass("form-group has-success has-feedback");
    $(spanId).addClass("glyphicon glyphicon-ok form-control-feedback");
  }
  invalid(elementId, spanId) {
    $(elementId).removeClass("form-group has-success has-feedback");
    $(spanId).removeClass("glyphicon glyphicon-ok form-control-feedback");
    $(elementId).addClass("form-group has-error has-feedback");
    $(spanId).addClass("glyphicon glyphicon-remove form-control-feedback");
  }
  check(element, elementId, spanId, inputId) {
    if (element.status == "VALID") {
      this.valid(elementId, spanId);
    }
    else {
      this.invalid(elementId, spanId);
      document.getElementById(inputId).focus();
    }
  }
  onSubmit(frm) {

    if (frm.password == frm.confirmPassword) {
      if (this.customersService.listCustomers.find(x => x["mail"] == frm.mail) == undefined) {
        frm.registrationDate = new Date().toString();
        this.customersService.addCustomer(frm); console.log(frm);
      }
      else {
        $("#divEmailExist").css("visibility", "visible");
      }
    }
    else
      this.confirmPassword("#emailSucsess2", "#spanSucsess2", "inputSucsess2");
  }
}
