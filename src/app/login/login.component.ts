import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import * as jwt_decode from "jwt-decode"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  password:any;
  expiryDate:number;
  todayDate:number;
  
  constructor(private router:Router,private loginservice:LoginService) { }


  //check the validity of the token
  ngOnInit() 
   {
  //   let token=localStorage.getItem("id_Token");
  //   if(token)
  //   {
  //   let decoded=jwt_decode(token);
  //   console.log(decoded);
  //   const date=new Date(0);
  //   date.setUTCSeconds(decoded.exp);
  //   this.expiryDate=date.getTime();
  //   let td=new Date();
  //   this.todayDate=td.getTime();

  //   //decoded.exp will give date one week ahead from receiving time of token
  //   if(this.todayDate>this.expiryDate)
  //   {
  //     this.logOut();    
  //     this.router.navigate(['/home/login']);
  //   }

  //   }
  }
  logOut()
    {
      localStorage.removeItem('idToken');
     // this.router.navigate(['home/login']);
    }
  readUser(v)
  {
    if(v.name=="vivekgoud" && v.password=="vivekgoud2212")
    {
      this.router.navigate(["admin"])
    }
    else 
    {
      this.loginservice.readLogin(v);
    }
   // console.log(v);
    this.name="";
    this.password="";
  }
  
}
