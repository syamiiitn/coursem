import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'src/app/userprofile.service';
import { log } from 'util';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data:object[]=[];
  profiledata:any={};

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
  savedata(v)
  {
   this.userprofile.readsaveprofile(this.profiledata);
   this.userprofile.readProfile().subscribe(temp=>{this.profiledata=temp;}) 
  }
}
