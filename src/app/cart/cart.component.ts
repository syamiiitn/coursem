import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   data:object[]=[];
   searchTerm:string;
  constructor(private ds:DataService,private http:HttpClient) { }

  ngOnInit() 
  {
    this.http.get<any>("api/user/cart").subscribe(temp=>{this.data=temp})
    }
  
    download(){
      
       //download pdf
       var doc=new jspdf();
       doc.setFontSize(40);
       doc.setTextColor(12,20,150);
       doc.text(20,80,'Welcome To CourseWala');
       doc.save('main.pdf');
     }

}
