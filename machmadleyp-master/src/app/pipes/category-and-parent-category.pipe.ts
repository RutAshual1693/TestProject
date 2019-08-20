import { Pipe, PipeTransform } from '@angular/core';
import { TypesService } from '../services/types.service';

@Pipe({
  name: 'categoryAndParentCategory'
})
export class CategoryAndParentCategoryPipe implements PipeTransform {
  constructor(private typesService: TypesService) {

  }
  transform(value: Array<object>, t: Array<object>): any {
    var myList = [];
    for (var i = 0; i < value.length; i++) {
      myList.push({ _id: value[i]["_id"], name: value[i]["name"] + " > " +t.find(x => x["_id"] == value[i]["types"])["name"] });
    }
    return myList;
  }

}
