import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ngOnInit() {
   
  }


  public listProduct: Array<object>;
  constructor(public productsService: ProductsService) {
    productsService.getListProducts().subscribe(
      (data: Array<object>) => {
        this.listProduct = data;
      }
    )

  }
  
}
