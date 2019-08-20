import { Component, OnInit } from '@angular/core';
import { StoreSettingService } from '../../../services/store-setting.service';
import { HttpClient } from '@angular/common/http';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private storeSettingService: StoreSettingService,
    private http: HttpClient
  ) { }
  form1;
  send(frm): Observable<object> {
    return this.http.post<object>('/sendEmail', { 'name': frm.name, 'email': frm.email, 'comment': frm.comment });
  }
  onSubmit(frm) {
    this.send(frm).subscribe(
      (data: object) => { }
    );
  }
  ngOnInit() {
    this.form1 = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      comment: new FormControl("", Validators.required)
    });
    $(window).scroll(function () {
      $(".slideanim").each(function () {
        var pos = $("#slide").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $("#slide").addClass("slide");
        }
        else {
          $("#slide").removeClass("slide");
        }
      });
    });

  }

}
