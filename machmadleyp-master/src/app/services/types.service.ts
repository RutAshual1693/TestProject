import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  public editParentCategory: object=[];
  public listTypes: Array<object>;
  constructor(public http: HttpClient) {
    this.types();
  }
  types() {
    this.getListTypes().subscribe(
      (data: Array<object>) => {
        this.listTypes = data;
      });
  }
  getListTypes(): Observable<Array<object>> {
    return this.http.get<Array<object>>('/listTypes');
  }
  addParentCategory(category) {
    this.http.post<object[]>("/addParentCategory", category).subscribe(
      (data: object[]) => this.listTypes = data
    );
  }
  delete(category) {
    this.http.post<object[]>('/deleteParentCategory', category).subscribe(
      (data: object[]) => { this.listTypes = data; }
    );
  }
  edit(frm) {
    var o = { _id: this.editParentCategory["_id"], name: frm.name };
    this.http.post<object[]>("/editParentCategory", o).subscribe(
      (data: object[]) => this.listTypes = data
    );
  }
}
