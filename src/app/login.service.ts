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
    this.http.post('api/home/login',v).subscribe(res=>{     
             

        if(res=="user not existed")
        {
          alert("user not existed")
         this.router.navigate(["home/login"])
        }
        else if(res=="wrong password")
        {
          alert("wrong password")
          this.router.navigate(["home/login"]);
        }
        else
        {
          localStorage.setItem('idToken',res['idToken']); 
          alert("login successfully");

           if(v.name=="vivekgoud" && v.password=="vivekgoud2212")
             {
             this.router.navigate(["admin"])
             }
         else 
           {
           this.router.navigate(["user"])
          }
        }
      })
  }
}
