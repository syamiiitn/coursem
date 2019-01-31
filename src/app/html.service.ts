import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor(private http:HttpClient,private router:Router) { }
  readdata():Observable<any>
  {
    console.log();
    return this.http.get<any>('api/user/html');
    
  }
  readdata1(v)
  {
    this.http.post('api/user/html',v).subscribe(temp=>{console.log(temp)});
  }



}


