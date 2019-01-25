import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  password:any;
  constructor(private router:Router,private loginservice:LoginService) { }

  ngOnInit() {
  }
  readUser(v)
  {
    if(v.name=="vivek" && v.password=="vivek")
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
