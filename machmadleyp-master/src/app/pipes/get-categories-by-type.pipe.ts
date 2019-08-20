import { Pipe, PipeTransform } from '@angular/core';
import { CategoriesService } from './../services/categories.service';


@Pipe({
  name: 'getCategoriesByType'
})
export class GetCategoriesByTypePipe implements PipeTransform {
  transform(value: Array<object>, args): any {
    return value.filter(x => x["types"] == args);
  }
}
