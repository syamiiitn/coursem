import { Component, OnInit, Inject } from '@angular/core';
import * as jspdf from 'jspdf' ;
@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css'],
providers: [{provide:'Window',useValue:window}]
})
export class JavaComponent implements OnInit {

  constructor(@Inject('Window')private window:Window) { }

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
