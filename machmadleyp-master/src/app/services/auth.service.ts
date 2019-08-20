import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor() {
 // if((sessionStorage.getItem('loginAdministrator'))=="true")
 //this.loggedIn = true;
 }
  isAuth() {
    //if ((sessionStorage.getItem('loginAdministrator')) == "true")
    //  this.loggedIn = true;
    return this.loggedIn;
  }
  ifDel = false;
  ifDelete(num) {
    if (num == 1)
      this.ifDel = true;
    else
      this.ifDel=false

  }
}
