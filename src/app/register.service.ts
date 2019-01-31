import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private router:Router) { }

submit(v)
{
  console.log(v);
  this.http.post('api/home/registration',v).subscribe(temp=>{alert(temp)

    if(temp='registered successfully')
    {
     this.router.navigate(['/home/login']);
    }
    if(temp=='username already existed...choose another name')
    {
     this.router.navigate(['/home/register']) ;
    }
  })


}


}

