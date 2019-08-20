import { Component, OnInit } from '@angular/core';
import { StoreSettingService } from '../../../services/store-setting.service';

@Component({
  selector: 'app-about-as',
  templateUrl: './about-as.component.html',
  styleUrls: ['./about-as.component.css']
})
export class AboutAsComponent implements OnInit {

  constructor(private storeSettingService: StoreSettingService) { }
  ngOnInit(){

}
  //ngOnInit() {
  //  $(window).scroll(function () {
  //    $(".slideanim").each(function () {
  //      var pos = $(".slide2").offset().top;

  //      var winTop = $(window).scrollTop();
  //      if (pos < winTop + 600) {
  //        $(".slide2").addClass("slide");
  //      }
  //      else {
  //        $(".slide2").removeClass("slide");
  //      }
  //    });
  //  });
  //}

}
