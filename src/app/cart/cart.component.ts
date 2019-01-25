import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   data:object[]=[];
   searchTerm:string;
  constructor(private ds:DataService) { }

  ngOnInit() 
  {
    this.ds.getData().subscribe(temp=>{this.data=temp;
    console.log(this.data)})

  }
  

}
