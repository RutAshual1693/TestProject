import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    //this.router.navigateByUrl("administratorLogin");
  }
  display = true;
  administorClick() {
    this.display = false;
  }
  clientClick() {
    this.display = false;
  }
  ngOnInit() {
    //$(document).ready(function () {
    //  $("#myModal").modal({ show: true });
    //});
  }
}
