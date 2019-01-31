import { Component, OnInit } from '@angular/core';
import { HtmlService } from '../html.service';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf' ;
@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  data:any[]=[];
  
  constructor(private html:HtmlService,private router:Router) { }

  ngOnInit()
  {
     this.html.readdata().subscribe(temp=>{this.data=temp
   }) 
  }

   addCart(v)
   {
     this.html.readdata1(v);
     this.router.navigate(['user/cart']);
   }
 download(){
   
    //download pdf
    var doc=new jspdf();
    doc.setFontSize(40);
    doc.setTextColor(150,1220,120);
    doc.text(60,60,'Sampile File');
    doc.save('sample.pdf');
  }


}
