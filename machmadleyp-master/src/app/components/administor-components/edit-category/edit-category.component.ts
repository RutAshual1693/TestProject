import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { FormGroup, FormControl } from '@angular/forms'
import { TypesService } from '../../../services/types.service';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(public categoriesService: CategoriesService, private typesService: TypesService) {

  }

  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(""),
      types: new FormControl("")
    });
    this.form.setValue({ name: this.categoriesService.editCategory["name"], types: this.categoriesService.editCategory["types"] });
  }
  onSubmit(frm) {
    this.categoriesService.edit(frm);
  }

}
