import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyLine'
})
export class EmptyLinePipe implements PipeTransform {

  transform(value: string, args: string): any {
    if (value.length > 30) {
      return false;
    }
    return true;
  }

}
