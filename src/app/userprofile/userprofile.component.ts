import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'src/app/userprofile.service';
import { log } from 'util';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data:any={};
  profiledata:any={};
  name:string;
  email:string;
  dateofbirth:number;
  contactno:number;


  constructor(private userprofile:UserprofileService) { }

  //receive data from server
  ngOnInit() 
  {
   this.userprofile.readProfile().subscribe(temp=>{this.data=temp})
   
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
