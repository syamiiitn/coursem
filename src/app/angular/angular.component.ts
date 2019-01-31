import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf' ;
import { AngularService } from '../angular.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

 
  data:any[]=[];
  constructor(private router:Router,private angular:AngularService) { }

  ngOnInit()
  {
     this.angular.readdata().subscribe(temp=>{this.data=temp
   }) 
  }

   addCart(v)
   {
     this.angular.readdata1(v);
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
