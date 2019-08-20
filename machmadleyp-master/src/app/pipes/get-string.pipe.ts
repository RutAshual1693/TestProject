import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getString'
})
export class GetStringPipe implements PipeTransform {

  transform(value: Array<object>): any {
    var s = "";
    for (var i = 0; i < value.length; i++) {
      s += value[i]['name'] + ', ';
    }
    return s;
  }

}
