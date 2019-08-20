import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ProductsService } from '../../../services/products.service';
import { TypesService } from '../../../services/types.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public listCategories: Array<object>;
  dropdownSettings = {};
  constructor(public categoriesService: CategoriesService, public productsService: ProductsService, public typesService: TypesService, private router: Router) {
    categoriesService.getListCategories().subscribe(
      (data: Array<object>) => {
        this.listCategories = data;
      
      });
  }


  form;
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
      name: new FormControl("", Validators.required),
      model: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      quantity: new FormControl(""),
      inStock: new FormControl("", Validators.required),
      categories: new FormControl("", Validators.required),
      prodDescription: new FormControl("", Validators.required),
      company: new FormControl("", Validators.required),
      typeAnimal: new FormControl(""),
      options: new FormControl(""),
      relatedProducts: new FormControl(""),
      img: new FormControl(),
      status: new FormControl("", Validators.required),

    });

  }
  listValue;
  listoptions = [{ _id: "", name: "", values: [] }];
  choosOPtionClicked(option) {
    this.listValue = this.productsService.listProductOptions.find(x => x["name"] == option)["values"];
    this.listoptions[this.listoptions.length - 1].name = option;
    this.listoptions[this.listoptions.length - 1]._id = this.productsService.listProductOptions.find(x => x["name"] == option)["_id"];
    this.clicked();
    console.log(this.form);
  }
  clicked() {
    this.listoptions.push({ _id: "", name: "", values: [] });
  }
  onSubmit(frm) {
    if (this.checkValue()) {
      this.listoptions.pop();
      frm.options = this.listoptions;
      console.log(frm);
      if (frm.inStock == "אזל מהמלאי")
        frm.status = "כבוי";
      frm.typeAnimal = this.typesService.listTypes.filter(x => frm.categories.find(y => this.categoriesService.listCategories.find(i => i["_id"] == y["_id"])["types"] == x["_id"]) != null);
      this.productsService.addProduct(frm);
      this.router.navigateByUrl("myOnlineStore/administor/productsBase");
    }
  }
  checkValue() {
    for (var i = 0; i < this.listoptions.length - 1; i++) {
      if (this.listoptions[i].values.length == 0) {
        alert("יש למלא  לפחות ערך אחד באפשרויות מוצר שבחרת ");
        return false;
      }
    }
    return true;

  }
  saveProducts() {


  }
  deleteOption(i) {
    this.listoptions.splice(i, 1);
  }
  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('img').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

}
