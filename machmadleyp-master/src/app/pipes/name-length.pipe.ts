import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLength'
})
export class NameLengthPipe implements PipeTransform {
  constructor() { }
  transform(value: string, args: string): any {
    var nameToLines = [];

    if (value.length > 30) {
      let str = value.slice(0, 30);
      let lastWordLength = str.lastIndexOf(' ');
      let index = value.slice(30, value.length).indexOf(' ');
      let a, b;
      if (index == 0) {
        a = value.slice(0, 30);
        b = value.slice(30, value.length);
      } else {
        a = str.slice(0, lastWordLength);
        b = value.slice(lastWordLength, value.length);
      }
      nameToLines[0] = a;
      nameToLines[1] = b;
    }
    else
      nameToLines[0] = value;
    return nameToLines;
  }

}
