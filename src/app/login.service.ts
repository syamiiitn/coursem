import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }

  readLogin(v)
  {
    console.log(v);
    this.http.post('user/login',v).subscribe(temp=>
      {
        alert(temp)
        console.log(temp)
        if(temp=="logged in successfully")
        {
          this.router.navigate(["user"]);
        }
      })
  }
}
