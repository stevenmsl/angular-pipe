import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  /*
    might have performance implication as the pipe will 
    be re-evaluated every time the data are changed  
  */
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (filterString.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
