import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf' ;
import { CcprogService } from '../ccprog.service';
@Component({
  selector: 'app-ccprog',
  templateUrl: './ccprog.component.html',
  styleUrls: ['./ccprog.component.css']
})
export class CcprogComponent implements OnInit {

  
  data:any[]=[];
  constructor(private router:Router,private ccprog:CcprogService) { }

  ngOnInit()
  {
     this.ccprog.readdata().subscribe(temp=>{this.data=temp
   }) 
  }

   addCart(v)
   {
     this.ccprog.readdata1(v);
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
