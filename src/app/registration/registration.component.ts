import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name:string;
  email:string;
  password:string;
  conformpassword:string;
  dateofbirth:string;
  gender:string;

  constructor(private router:Router,private register:RegisterService) { }

 getData(v):void
  {
    this.register.submit(v);
    this.router.navigate(["/home/login"])
    
  }

}
