import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CssService {

 

  constructor(private http:HttpClient,private router:Router) { }
  readdata():Observable<any>
  {
    console.log();
    return this.http.get<any>('api/user/css');
    
  }
  readdata1(v)
  {
    this.http.post('api/user/css',v).subscribe(temp=>{console.log(temp)});
  }

}
