import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
@Injectable()
export class ProductsService implements OnInit {
  public homePage: boolean = true;
  public listProducts: Array<object>;
  public listProductOptions: Array<object>;
  public editProductOption: object;
  public editProduct: object;
  public editFormProduct;
  public listProductByCategory: Array<object>;
  public listProductByCategoryForSort: Array<object>;
  public showProductDetails: object = [];
  public showProductOptions: Array<object> = [];
  constructor(public http: HttpClient) {
    this.getProductOptions();
    this.products();
  }
  adminNav = [{ title: "מוצרים", button: "צור מוצר חדש", routerLink: "add" }]
  showHome = true;
  ngOnInit() {

    //this.editFormProduct = new FormGroup({
    //  name: new FormControl(""),
    //  model: new FormControl(""),
    //  price: new FormControl(""),
    //  quantity: new FormControl(""),
    //  inStock: new FormControl(true),
    //  minQuantityInOrder: new FormControl(""),
    //  uniqueNameToLink: new FormControl(""),
    //  categories: new FormControl(""),
    //  prodDescription: new FormControl(""),
    //  company: new FormControl(""),
    //  typeAnimal: new FormControl(""),
    //  options: new FormControl(""),
    //  relatedProducts: new FormControl(""),
    //  img: new FormControl(""),
    //});

  }
  copy(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;

    for (key in mainObj) {
      objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
  }

  editProductClicked(product) {
    this.products();
    this.editProduct = this.copy(product);

  }
  products() {
    this.getListProducts().subscribe(
      (data: Array<object>) => {
        this.listProducts = data;
      }
    )
  }
  editCategoriesOnProduct(list) {
    this.http.post<object[]>('/deleteCategoryFromProduct', list).subscribe(
      (data: object[]) => { this.listProducts = data; }
    );

  }
  saveProductEditing(product) {
    var o = { "_id": this.editProduct["_id"], "product": product };
    this.http.post<Array<object>>('/saveProductEditing', o).subscribe(
      (data: object[]) => this.listProducts = data);
  }
  getListProducts(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/listProducts');
  }
  getProductOptions() {
    this.http.get<Array<object>>('/listProductOptions').subscribe(
      (data: object[]) => this.listProductOptions = data);
  }
  addProduct(product) {
    this.http.post<object[]>("/addProduct", product).subscribe(
      (data: object[]) => this.listProducts = data
    );
  }
  addProductOption(productOption) {
    this.http.post<object[]>("/addProductOption", productOption).subscribe(
      (data: object[]) => this.listProductOptions = data
    );
  }
  deleteOption(option) {

    this.http.post<object[]>('/deleteOption', option).subscribe(
      (data: object[]) => { this.listProductOptions = data; }
    );

  }
  deleteCategoryFromProduct(_id, categories) {
    var o = { "_id": _id, "categories": categories };
    this.http.post<object[]>('/deleteCategoryFromProduct', o).subscribe(
      (data: object[]) => { this.listProducts = data; }
    );

  }

  deleteProduct(_id) {
    var a = { _id: _id };
    this.http.post<object[]>('/deleteProduct', a).subscribe(
      (data: object[]) => { this.listProducts = data; }
    );
  }
  d(productOption) {
    this.http.post<object[]>('/editProductOptions', productOption).subscribe(
      (data: object[]) => { this.listProducts = data; }
    );
  }
}
