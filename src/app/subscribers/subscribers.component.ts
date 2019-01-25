import { Component, OnInit } from '@angular/core';
import { SubscribersService } from 'src/app/subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
  data:object[]=[];
  searchTerm:string;
  constructor(private subscribers:SubscribersService) { }
 
  ngOnInit() 
  {
  this.subscribers.read().subscribe(temp=>{this.data=temp;
  console.log(temp)})
  }
  
}
