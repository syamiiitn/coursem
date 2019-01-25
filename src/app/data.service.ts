import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
getData():Observable<any>
{
  return this.http.get<any>("assets/cart.json");
}
getDatas():Observable<any>
{
  return this.http.get<any>("assets/subsrcib.json");
}
getDatap():Observable<any>
{
  return this.http.get<any>("assets/purchase.json");
}
getDatah():Observable<any>
{
  return this.http.get<any>("assets/history.json");
}
}


