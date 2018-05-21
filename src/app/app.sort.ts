import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({  // this is decorator
  name: 'sortPipe'    // this is pipe Name
})

export class SortPipe implements PipeTransform {
  transform(value: any[], args: string):any {   
    // value stores array and args stores the string
   
    if(args === 'ascending') {
        return value.sort();
      }
      else if( args === 'descending' ) {
        return value.sort().reverse();
      }
  }
}

