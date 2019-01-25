import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CourseService} from '../course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit  {

   constructor(private router:Router, private course:CourseService){}
   
   from(v)
   {
    this.course.sendData(v);
    console.log(v);
   }

   ngOnInit()
   {
    this.course.readData().subscribe(temp=>{this.data=temp;
    console.log(temp)})
   }
   
  t:boolean=false;
  data:object[]=[];
  data1:any={};
  a:string;
  b:string;
  c:string;
  d:string;
  e:string;
  f:string;
  g:string;
  h:string;
  i:string;
  
  AddData(v):void
  {
  console.log(v);
  this.data.push(v);
  this.a='';
  this.b='';
  this.c='';
  this.d='';
  this.e='';
  this.f='';
  this.g='';
  this.h='';
  this.i='';
  }
  
  editdata(v):void
  {
    this.t=true;
    this.data1=v;
  }
   saveData(v) 
   {
     this.course.saveupdated(this.data1);
     this.course.readData().subscribe(temp=>{this.data1=temp;
    console.log(this.data1)});
   }
   Delete(i){
   console.log(i);
   
     this.course.deletedata(i).subscribe(temp=>{})
  }

}