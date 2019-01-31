import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CcprogService {



 constructor(private http:HttpClient,private router:Router) { }
 readdata():Observable<any>
 {
   console.log();
   return this.http.get<any>('api/user/ccprog');
   
 }
 readdata1(v)
 {
   this.http.post('api/user/ccprog',v).subscribe(temp=>{console.log(temp)});
 }

}
