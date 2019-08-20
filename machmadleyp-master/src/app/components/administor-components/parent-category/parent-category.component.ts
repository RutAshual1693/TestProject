import { Component, OnInit } from '@angular/core';
import { TypesService } from '../../../services/types.service';

@Component({
  selector: 'app-parent-category',
  templateUrl: './parent-category.component.html',
  styleUrls: ['./parent-category.component.css']
})
export class ParentCategoryComponent implements OnInit {

  constructor(public typesService: TypesService) { }

  ngOnInit() {
  }
  editCategoryClicked(category) {
    this.typesService.editParentCategory = category;
  }
  delete(category) {
    this.typesService.delete(category);
  }
}
