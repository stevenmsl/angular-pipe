import { PipeTransform, Pipe } from '@angular/core';

/*
  -	use Pipe decorator 
  - implements PipeTransform interface
  - declare it in app module 
*/

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return `${value.substr(0, limit)} ...`;
    }
    return value;
  }
}
