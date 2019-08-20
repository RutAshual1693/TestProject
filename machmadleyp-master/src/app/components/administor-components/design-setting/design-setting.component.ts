import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-design-setting',
  templateUrl: './design-setting.component.html',
  styleUrls: ['./design-setting.component.css']
})
export class DesignSettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var themes = "chiller-theme ice-theme cool-theme light-theme";
    $('[data-theme]').click(function () {
      $('[data-theme]').removeClass("selected");
      $(this).addClass("selected");
      $('.page-wrapper').removeClass(themes);
      $('.page-wrapper').addClass($(this).attr('data-theme'));
    });

    // switch between background images
    var bgs = "bg1 bg2 bg3 bg4";
    $('[data-bg]').click(function () {
      $('[data-bg]').removeClass("selected");
      $(this).addClass("selected");
      $('.page-wrapper').removeClass(bgs);
      $('.page-wrapper').addClass($(this).attr('data-bg'));
    });

    // toggle background image
    $("#toggle-bg").change(function (e) {
      e.preventDefault();
      $('.page-wrapper').toggleClass("sidebar-bg");
    });

    //custom scroll bar is only used on desktop
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

      $(".sidebar-content").addClass("desktop");

    }
  }

}
