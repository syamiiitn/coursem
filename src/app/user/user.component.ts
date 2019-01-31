import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  constructor(private http:HttpClient,private router:Router) { }
 
  ngOnInit() {
    if(localStorage.getItem('idToken')==null)
    {
      this.router.navigate(['home/login'])
    }
  }

 logout()
 {
  var a= localStorage.removeItem('idToken');
  
  this.router.navigate (['home/login'])
 }

  
  }
  
  // save(v)
  // {
  //   this.http.post('user',v).subscribe();
  // }
  // rr(v)
  // {
  //   console.log(v);
  // }


