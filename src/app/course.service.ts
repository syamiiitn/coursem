import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseService  {

  constructor(private http:HttpClient,private router:Router) { }
 
  sendData(v)
  {
    console.log(v);
    this.http.post('admin/course',v).subscribe(temp=>{alert(temp)
  })
 
}
readData():Observable<any>
{
  return this.http.get<any>('admin/course');
}
saveupdated(v)
{
  this.http.put('admin/course',v).subscribe();
  console.log(v);
}
deletedata(v):Observable<any>
{
 var httpoptions={
   headers:new HttpHeaders({'Content-Type':'application/json'}),body:v }
   return this.http.delete<any[]>('admin/course',httpoptions);
}
 
}