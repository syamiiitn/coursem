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
    return this.http.get<any>('home/java');
  }
  
}

