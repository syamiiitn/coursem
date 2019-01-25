import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-purchagers',
  templateUrl: './purchagers.component.html',
  styleUrls: ['./purchagers.component.css']
})
export class PurchagersComponent implements OnInit {
  data:object[]=[];
  searchTerm:string;
  
 
  constructor(private ds:DataService) { }
 
  ngOnInit() 
  {
  this.ds.getDatap().subscribe(temp1=>{this.data=temp1;
  console.log(this.data)});
  
  }


}
