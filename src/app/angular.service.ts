import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

 constructor(private http:HttpClient,private router:Router) { }
  readdata():Observable<any>
  {
    console.log();
    return this.http.get<any>('api/user/angular');
    
  }
  readdata1(v)
  {
    this.http.post('api/user/angular',v).subscribe(temp=>{console.log(temp)});
  }

}
