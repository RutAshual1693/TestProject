import { Component, OnInit } from '@angular/core';
import { StoreSettingService } from '../../../services/store-setting.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private storeSettingService: StoreSettingService) { }

  ngOnInit() {
  }

}
