import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchid'
})
export class SearchidPipe implements PipeTransform {
  transform(data:any[],searchTerm:string):any
  {
    if(!data||!searchTerm)
    {
      return data;
    }
    else
    {
     return data.filter(x=>x.customerid.indexOf(searchTerm)!==-1);


    }
  }
  
  }


