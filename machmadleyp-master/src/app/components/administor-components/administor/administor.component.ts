import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-administor',
  templateUrl: './administor.component.html',
  styleUrls: ['./administor.component.css']
})
export class AdministorComponent implements OnInit {
  active = 'main';
  constructor(private authService: AuthService, private router: Router) {

  }
  public show: boolean = true;
  clicked(value) {
    if (value != '')
    this.active = value;
    this.show = false;

  }
  powerOf() {
    this.authService.loggedIn = false;
    this.router.navigateByUrl('/');
  }
  ngOnInit() {

      // Dropdown menu
    $(".sidebar-dropdown > a").click(function () {
     
        $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
          $(".sidebar-dropdown").removeClass("active");
          $(this).parent().removeClass("active");
        } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this).next(".sidebar-submenu").slideDown(200);
          $(this).parent().addClass("active");
        }

      });

      // close sidebar 
      $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
      });

      //show sidebar
      $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
      });
      //custom scroll bar is only used on desktop
      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        
        $(".sidebar-content").addClass("desktop");

      }
}
  }

