import { Component, OnInit, Inject } from '@angular/core';
import * as jspdf from 'jspdf' ;
//import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css'],
  providers: [{provide:'window', useValue:window}]

})
export class ClistComponent implements OnInit {

  constructor(@Inject('window') private window:Window) { }

  ngOnInit() {
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
