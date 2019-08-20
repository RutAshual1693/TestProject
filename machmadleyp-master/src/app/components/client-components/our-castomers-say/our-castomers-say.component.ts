import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-our-castomers-say',
  templateUrl: './our-castomers-say.component.html',
  styleUrls: ['./our-castomers-say.component.css']
})
export class OurCastomersSayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //$.noConflict();
    //$(document).ready(function () {

    //  $('#myCarousel').carousel({
    //    interval: 1000,
    //  });
    //});
    //$("#myCarousel2").find(".item").css("-webkit-transition", "transform 3s ease-in-out 0s").css("transition", "transform 3s ease-in-out 0s")
  }

}
