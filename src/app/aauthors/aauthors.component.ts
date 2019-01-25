import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aauthors',
  templateUrl: './aauthors.component.html',
  styleUrls: ['./aauthors.component.css']
})
export class AauthorsComponent  {

 
  t1:boolean=false;
  obj:object[]=[];
  a1:string;
  b1:string;
  c1:string;
  d1:string;
  e1:string;
  f1:string;
  g1:string;
  data:object;
  AddData(v):void
  {
  console.log(v);
  this.obj.push(v);
  this.a1='';
  this.b1='';
  this.c1='';
  this.d1='';
  this.e1='';
  this.f1='';
  this.g1='';
 
  }
  Delete(v):void
  {
    console.log(v)
  this.obj.splice(v,1); 
  }
  editdata(y1):void
  {
  this.t1=true;
  this.data=y1;
  }
  savedata(y1):void
  {
  this.t1=false;
  }
  }


  

