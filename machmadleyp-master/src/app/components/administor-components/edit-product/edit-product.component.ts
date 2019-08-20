import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TypesService } from '../../../services/types.service';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  dropdownSettings;
  product: object;
  constructor(private productsService: ProductsService, private typesService: TypesService, private categoriesService: CategoriesService) {
    this.product = productsService.editProduct;
  }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      model: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      quantity: new FormControl(""),
      inStock: new FormControl("", Validators.required),
      //minQuantityInOrder: new FormControl("", Validators.required),
      //uniqueNameToLink: new FormControl("", Validators.required),
      categories: new FormControl("", Validators.required),
      prodDescription: new FormControl("", Validators.required),
      company: new FormControl("", Validators.required),
      typeAnimal: new FormControl(""),
      options: new FormControl(""),
      relatedProducts: new FormControl(""),
      //img: new FormControl(""),
      status: new FormControl("", Validators.required),
    });
    this.form.setValue({
      name: this.productsService.editProduct["name"],
      model: this.productsService.editProduct["model"],
      price: this.productsService.editProduct["price"],
      quantity: this.productsService.editProduct["quantity"],
      inStock: this.productsService.editProduct["inStock"],
      //minQuantityInOrder: this.productsService.editProduct["minQuantityInOrder"],
      //uniqueNameToLink: this.productsService.editProduct["uniqueNameToLink"],
      categories: this.productsService.editProduct["categories"],
      prodDescription: this.productsService.editProduct["prodDescription"],
      company: this.productsService.editProduct["company"],
      typeAnimal: this.productsService.editProduct["typeAnimal"],
      options: this.productsService.editProduct["options"],
      relatedProducts: null,
      status: this.productsService.editProduct["status"]
      //img: this.productsService.editProduct["img"]
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };

  }
  listValue;
  listoptions = [{ _id: "", name: "", values: [] }];
  choosOPtionClicked(option) {
    this.listValue = this.productsService.listProductOptions.find(x => x["name"] == option)["values"];
    this.productsService.editProduct["options"][this.productsService.editProduct["options"].length - 1].name = option;
    this.clicked();
    console.log(this.form);
  }
  clicked() {
    this.productsService.editProduct["options"].push({ _id: "", name: "", values: [] });
  }
  onSubmit(frm) {
    if (this.checkValue()) {
      console.log(frm);
      frm.typeAnimal = this.typesService.listTypes.filter(x => frm.categories.find(y => this.categoriesService.listCategories.find(i => i["_id"] == y["_id"])["types"] == x["_id"]) != null);
      if (frm.inStock == "קיים במלאי")
        frm.inStock = true;
      else
        frm.inStock = false;
      this.productsService.saveProductEditing(frm);
    }
  }
  checkValue() {
    for (var i = 0; i < this.productsService.editProduct["options"].length - 1; i++) {
      if (this.productsService.editProduct["options"][i].values.length == 0) {
        alert("יש למלא  לפחות ערך אחד באפשרויות מוצר שבחרת ");
        return false;
      }
    }
    return true;
  }
  deleteOption(i) {
    this.productsService.editProduct["options"].splice(i, 1);
  }
}
