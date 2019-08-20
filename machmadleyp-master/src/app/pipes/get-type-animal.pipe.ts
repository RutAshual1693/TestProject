import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTypeAnimal'
})
export class GetTypeAnimalPipe implements PipeTransform {

  transform(value: Array<object>, args): any {
    return value.find(x => x["_id"] == args)["name"];
  }

}
