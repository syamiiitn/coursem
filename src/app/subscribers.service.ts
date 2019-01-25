import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class SubscribersService  {

  constructor(private http:HttpClient) { }
read():Observable<any>
{
  return this.http.get('/admin/subscribers');

}


}
