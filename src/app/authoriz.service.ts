import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpInterceptor } from '@angular/common/http';


@Injectable()

export class AuthorizService implements HttpInterceptor {
intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
{
//read token from locakStorage
const idToken=localStorage.getItem("idToken");
//if token found .clone it to request object at header
if(idToken)
  {
  const cloned=req.clone({
      headers:req.headers.set("authorization","Bearer "+idToken)
  })
  return next.handle(cloned);
  }
  else
  {
   return next.handle(req);
  }
}


}
