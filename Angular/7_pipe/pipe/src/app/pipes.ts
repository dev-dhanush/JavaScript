import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'toCaps'
})
export class ToCapsPipe implements PipeTransform {
  transform(input: string) {
    if (input.toUpperCase) {
      return input.toUpperCase();
    }
    return input.toLowerCase();
  }
}

