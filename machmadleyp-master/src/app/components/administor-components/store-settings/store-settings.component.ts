import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { StoreSettingService } from '../../../services/store-setting.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-store-settings',
  templateUrl: './store-settings.component.html',
  styleUrls: ['./store-settings.component.css']
})
export class StoreSettingsComponent implements OnInit {

  constructor(private productsService: ProductsService, private storeSettingService: StoreSettingService, private http: HttpClient) {
    this.getStoreSetting();
  }
  getStoreSetting() {
   this.http.get<Array<object>>('/getStoreSetting').subscribe(
     (data: Array<object>) => {
       this.storeSettingService.storeSetting = data[0];
    this.form.setValue({
      nameStore: this.storeSettingService.storeSetting.nameStore,
      nameAdmin: this.storeSettingService.storeSetting.nameAdmin,
      adress: this.storeSettingService.storeSetting.adress,
      email: this.storeSettingService.storeSetting.email,
      geographicCode: this.storeSettingService.storeSetting.geographicCode,
      numberPhone: this.storeSettingService.storeSetting.numberPhone,
      fax: this.storeSettingService.storeSetting.fax,
      contact: this.storeSettingService.storeSetting.contact,
      openingHours: this.storeSettingService.storeSetting.openingHours,
      hotProducts: this.storeSettingService.storeSetting.hotProducts,
      customerSay: this.storeSettingService.storeSetting.customerSay,
      about: this.storeSettingService.storeSetting.about,
      
    })
    this.form.hotProducts = [];  
        });
    }
  form; dropdownSettings;
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
    this.form = new FormGroup({
      nameStore: new FormControl("", Validators.required),
      nameAdmin: new FormControl("", Validators.required),
      adress: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      geographicCode: new FormControl("", Validators.required),
      numberPhone: new FormControl("", Validators.required),
      fax: new FormControl("", Validators.required),
      contact: new FormControl("", Validators.required),
      openingHours: new FormControl("", Validators.required),
      hotProducts: new FormControl("", Validators.required),
      customerSay: new FormControl("", Validators.required),
      about: new FormControl("", Validators.required),
    });
 }
  onSubmit(frm) {
    if (frm.hotProducts.length == 6) {
      this.storeSettingService.editStoreSetting(frm);
    }
    else
      alert("יש לבחור שישה מוצרים חמים שיוצגו בדף הבית");
  }
}
