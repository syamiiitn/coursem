import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  hist:object[]=[];

    constructor(private ds:DataService) { }

  ngOnInit()
   {
     
     this.ds.getDatah().subscribe(temp=>{this.hist=temp;
    console.log(this.hist)})  
    }

}
