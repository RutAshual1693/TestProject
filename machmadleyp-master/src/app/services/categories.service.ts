import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { arrayExpression } from 'babel-types';
import { TypesService } from '../services/types.service';

@Injectable()
export class CategoriesService {
  public editCategory: object = { name: "sdd" };
  public listCategories: object[] = [];
  myList: object[] = [];
  constructor(public http: HttpClient,private typesService: TypesService) {
   
    this.categories();
  }
  categories() {
  this.getListCategories().subscribe(
      (data: Array<object>) => {
        this.listCategories = data;
        for (var i = 0; i < this.listCategories.length; i++) {
          this.myList.push({ _id: this.listCategories[i]["_id"], name: this.listCategories[i]["name"] + " > " + this.typesService.listTypes.find(x => x["_id"] == this.listCategories[i]["types"])["name"] });
        }
      });
  }
  getListCategories(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/listCategories');
  }
  delete(category) {
    this.http.post<object[]>('/deleteCategories', category).subscribe(
      (data: object[]) => { this.listCategories = data;  }
    );
  }
  addCategory(category) {
    this.http.post<object[]>("/addCategory", category).subscribe(
      (data: object[]) => this.listCategories = data
    );
  }
  edit(frm) {
    var o = { _id: this.editCategory["_id"], category:frm  };
    this.http.post<object[]>("/editCategory", o).subscribe(
      (data: object[]) => this.listCategories = data
    );
  }
}
