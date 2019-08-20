import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class StoreSettingService {
 public storeSetting;
  constructor(public http: HttpClient) {
    this.getStoreSetting();
  }
  getStoreSetting() {
    this.StoreSetting().subscribe(
      (data: Array<object>) => {
        this.storeSetting = data[0];
      });
  }
  StoreSetting(): Observable < Array < object >>  {
      return this.http.get<Array<object>>('/getStoreSetting');
  }
  editStoreSetting(storeSetting) {
    storeSetting._id = this.storeSetting._id;
    this.http.post<object[]>("/editStoreSetting", storeSetting).subscribe(
      (data: object[]) => this.storeSetting = data[0]
    )
  }
}
