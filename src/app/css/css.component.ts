import { Component, OnInit } from '@angular/core';
import { CssService } from '../css.service';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf' ;
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  data:any[]=[];
  
  constructor(private css:CssService,private router:Router) { }

  ngOnInit()
  {
     this.css.readdata().subscribe(temp=>{this.data=temp
   }) 
  }

   addCart(v)
   {
     this.css.readdata1(v);
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
