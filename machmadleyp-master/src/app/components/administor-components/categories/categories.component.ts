import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';
import { TypesService } from '../../../services/types.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public categoriesService: CategoriesService, public productsServce: ProductsService, public typesService: TypesService) {

  }

  ngOnInit() {
    this.list = [];
  } list = [];
  delete(category) {

    for (var i = 0; i < this.productsServce.listProducts.length; i++) {
      for (var i = 0; i < this.productsServce.listProducts.length; i++) {
        var c = this.productsServce.listProducts[i]["categories"];
        if (c.find(x => x._id == category._id) != null) {
          if (c.length > 1) {
            for (var j = 0; j < c.length; j++)
              if (c[j]["_id"] == category._id)
                break;
            c.splice(j, 1);
            this.list.push({ _id: this.productsServce.listProducts["_id"], categories: c });
          }
          else this.list.push({ _id: this.productsServce.listProducts["_id"], categories: [] });
        }
      }
    }
    this.productsServce.editCategoriesOnProduct(this.list)
    this.categoriesService.delete(category);
  }
  editCategoryClicked(category) {
    this.categoriesService.editCategory = category;
  }
  //addCategory() {
  //  this.categoriesService.add();

  //}
}
