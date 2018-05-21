import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({  // this is decorator
  name: 'findG'    // this is pipe Name
})

export class findG implements PipeTransform {
  transform(value):any {   
    // value stores array and args stores the string
   
    if(value === 1) {
        return "Male";
      }
      else if( value === 2 ) {
        return "FeMale";
      }
      else if( value === 3 ) {
        return "Not Disclosed";
      }
  }
}

