import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'src/app/userprofile.service';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data:any[]=[];
  profiledata:any={};
  name:string;
  email:string;
  dateofbirth:number;
  contactno:number;


  constructor(private userprofile:UserprofileService,private router:Router) { }

  //receive data from server
  ngOnInit() 
  {
   this.userprofile.readProfile().subscribe(temp=>{
    console.log(temp);
    
     if(temp['message']=="token is not valid")
     {
      alert(temp['message']);
       this.router.navigate(['home/login']);
     }
     else
     {
      this.data=temp;
     }
   })
   
  }
  editprofile(v)
  {
    console.log(v)
    this.profiledata=v;

   
  }
  savedata()
  {
   this.userprofile.readsaveprofile(this.profiledata);
   this.userprofile.readProfile().subscribe(temp=>{this.profiledata=temp;}) 
  }
}
