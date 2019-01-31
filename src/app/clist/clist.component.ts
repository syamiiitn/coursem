import { Component, OnInit, Inject } from '@angular/core';
import * as jspdf from 'jspdf' ;
import { Router } from '@angular/router';
import { CpService } from 'src/app/cp.service';
//import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css'],
  providers: [{provide:'window', useValue:window}]

})
export class ClistComponent implements OnInit {
  data:any[]=[];
  constructor(@Inject('window') private window:Window,private router:Router,private cpservice:CpService) { }

  ngOnInit()
  {
     this.cpservice.readdata().subscribe(temp=>{this.data=temp
   }) 
  }

   addCart(v)
   {
     this.cpservice.readdata1(v);
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
