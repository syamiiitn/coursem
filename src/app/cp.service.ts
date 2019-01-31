import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CpService {

  constructor(private http:HttpClient) { }

  readdata():Observable<any>
  {
    console.log();
    return this.http.get<any>('api/user/clist');
    
  }
  readdata1(v)
  {
    this.http.post('api/user/clist',v).subscribe(temp=>{console.log(temp)});
  }


  
}
