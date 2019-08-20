import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { StripeService, StripeCardComponent, ElementOptions, ElementsOptions } from "ngx-stripe";
import { PaymentService } from '../../../services/payment.service';

import { NgForm } from '@angular/forms';

declare var stripe: any;
declare var elements: any;
@Component({
  selector: 'app-stripe',
  templateUrl: 'stripe.component.html'
})
export class StripeComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: ElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        },
      },
    }

  };

  elementsOptions: ElementsOptions = {
    locale: 'auto'
  };

  stripeTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private paymentService: PaymentService
  ) { }




  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });

  }

  buy() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe(result => {
        if (result.token) {
          //let token = 'tok_visa';
          //let token = result.token.id;
          var user = JSON.parse(sessionStorage.getItem("user"));
          if (!user) {

          }
          this.paymentService.charge(result.token, user).subscribe(
            data => {
              console.log(data['status']);
            }
          );
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
}

