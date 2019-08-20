import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  public showAdd: boolean = true;
  arr = ["AKC6338 מיטה מלבנית משובצת.JPG", "AKC4600 מיטת אביב מלבנית.JPG", "מיטת-זמש-אורטופדית-250x150.jpg"]
  constructor(public productsService: ProductsService, private authService: AuthService) {
  
    }
  ngOnInit() {

  }
  clicked() {
    this.showAdd = false;
  }
  edit(product) {

  }
  delete(product) {
    if (this.authService.ifDel==true)
    this.productsService.deleteProduct(product._id);
  }
}
