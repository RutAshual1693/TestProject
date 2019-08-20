
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { TypesService } from '../../../services/types.service';
import { SalesService } from '../../../services/sales.service';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css']
})
export class EditSaleComponent implements OnInit {
  dropdownSettings; form; arr1: Array<object>;
  public listCategories: object[] = [];
  listTypes: object[] = [];
  constructor(private salesService: SalesService, private productsService: ProductsService, private categoriesService: CategoriesService, private typeService: TypesService) {
    this.typeService.getListTypes().subscribe(
      (data1: Array<object>) => {
        this.listTypes = data1;
        this.categoriesService.getListCategories().subscribe(
          (data: Array<object>) => {
            this.listCategories = data;
            let i = 0;
            this.arr1 = this.categoriesService.listCategories;
            for (let category of this.arr1) {
              category["name"] = category["name"] + " > " + this.typeService.listTypes.find(t => t["_id"] == category["types"])["name"];
            }
          }
        );
      }
    )

  }
  //getListCategories(): Observable<Array<object>> {
  //  return this.http.get<Array<object>>('/listCategories');
  //}
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
      //_id: new FormControl(""),
      nameSale: new FormControl("", Validators.required),
      kindDiscount: new FormControl("", Validators.required),
      status: new FormControl("", Validators.required),
      scope: new FormControl("", Validators.required),
      countDiscount: new FormControl(""),
      selectedProducts: new FormControl("", Validators.required),
      //selectedCategories: new FormControl(""),
    });
    this.form.setValue({ nameSale: this.salesService.editSale["nameSale"], kindDiscount: this.salesService.editSale["kindDiscount"], status: this.salesService.editSale["status"], scope: this.salesService.editSale["scope"], countDiscount: this.salesService.editSale["countDiscount"], selectedProducts: this.salesService.editSale["selectedProducts"] });
  }

  onSubmit(frm) {
    frm._id = this.salesService.editSale['_id'];
    console.log(frm);

    //let x = { "selected": frm.selectedProducts, "kind": frm.kindDiscount, "count": frm.countDiscount ,"status":frm.status};
    //console.log(x);
    this.salesService.editSaleF(frm);



  }
  clicked(d) {
    var f = d;

  }

}
