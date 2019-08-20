import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { CategoriesService } from '../../../services/categories.service';
import { TypesService } from '../../../services/types.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  dropdownSettings = {};
  constructor(public categoriesService: CategoriesService, public typesService: TypesService, private router: Router) { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      types: new FormControl("", Validators.required)
    });
    this.dropdownSettings = {
  singleSelection: false,
  idField: '_id',
  textField: 'name',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 4,
  allowSearchFilter: true
}
  }
 
  onSubmit(frm) {
    console.log(frm);
    this.categoriesService.addCategory(frm);
    this.router.navigateByUrl("myOnlineStore/administor/categoriesBase")
  }
}
