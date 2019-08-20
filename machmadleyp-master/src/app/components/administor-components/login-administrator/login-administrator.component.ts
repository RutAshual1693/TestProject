
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CustomersService } from '../../../services/customers.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.component.html',
  styleUrls: ['./login-administrator.component.css']
})
export class LoginAdministratorComponent implements OnInit {
  amdinistratorDetails = {};
  constructor(private customersService: CustomersService, private http: HttpClient,private  authService: AuthService,private router:Router) {
    this.administrator();
  }
  administrator() {
    this.getAdministrator().subscribe(
      (data: Array<object>) => {
        this.amdinistratorDetails = data[0];
      });
  }
  getAdministrator(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/administrator');
  }

  form;
  ngOnInit() {
  //  $("#myModal").modal('show');
    this.form = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit(frm) {
    //$('#frm').validator();
    console.log(frm);
    //frm.registrationDate = new Date().toString();

    if (this.amdinistratorDetails["mail"] == frm.email && this.amdinistratorDetails["password"] == frm.password) {
      this.authService.loggedIn = true;
      sessionStorage.setItem('loginAdministrator', JSON.stringify('true'));
      //this.router.navigateByUrl('administor');
    }
    else {
      sessionStorage.setItem('loginAdministrator', JSON.stringify('false'));
      this.authService.loggedIn = false;
      this.router.navigateByUrl('myOnlineStore');

   }
  }

}
