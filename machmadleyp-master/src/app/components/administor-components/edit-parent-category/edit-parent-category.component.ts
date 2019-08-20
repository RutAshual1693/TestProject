import { Component, OnInit } from '@angular/core';
import { TypesService } from '../../../services/types.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-parent-category',
  templateUrl: './edit-parent-category.component.html',
  styleUrls: ['./edit-parent-category.component.css']
})
export class EditParentCategoryComponent implements OnInit {

  constructor( private typesService: TypesService) {

  }

  form;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(""),
    });
    this.form.setValue({ name: this.typesService.editParentCategory["name"] });
  }
  onSubmit(frm) {
    this.typesService.edit(frm);
  }
}
