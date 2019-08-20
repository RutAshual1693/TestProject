import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'originPrice'
})
export class OriginPricePipe implements PipeTransform {

  transform(value: Array<object>, args: object): any {
    console.log(value);
    for (let sales of value) {
      for (let sale of sales["selectedProducts"])
        if (sale["_id"] == args["_id"]) {
          return null;
        }
    }
    return "₪" +args["price"];
  }
}
