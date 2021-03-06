import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

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
