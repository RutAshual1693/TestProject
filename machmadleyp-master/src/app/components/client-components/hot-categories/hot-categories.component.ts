import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hot-categories',
  templateUrl: './hot-categories.component.html',
  styleUrls: ['./hot-categories.component.css']
})
export class HotCategoriesComponent implements OnInit {

  constructor() { }

  //ngOnInit() {
  //  $(window).scroll(function () {
  //    $("#slide1").each(function () {
  //      var pos = $("#slide1").offset().top;

  //      var winTop = $(window).scrollTop();
  //      if (pos < winTop + 600) {
  //        $("#slide1").addClass("slide");
  //      }
  //      else {
  //        $("#slide1").removeClass("slide");
  //      }
  //    });
  //  });
  //}
  ngOnInit() {
    $(window).scroll(function () {
      $(".anima").each(function () {
        var pos = $(".anima").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(".anima").addClass("animate1");
        }
        else {
          $(".anima").removeClass("animate1");
        }
      });
      $(".anima1").each(function () {
        var pos = $(".anima1").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(".anima1").addClass("animate2 slide");
        }
        else {
          $(".anima1").removeClass("animate2 slide");
        }
      });
    });
  }
}
