import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JcourseService {

  constructor(private router:Router,private http:HttpClient) { }

  readdata():Observable<any>
  {
    console.log();
    return this.http.get<any>('api/user/java');
    
  }


  readdata1(v)
  {
    this.http.post('api/user/java',v).subscribe(temp=>{console.log(temp)});
  }

}

