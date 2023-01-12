import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   _Url='http://localhost:3000/api/login';


  constructor(private http:HttpClient) { }

  saveUser(data:any){
    console.log("service is working fine sai ")
    return this.http.post(this._Url,data)
  }

  
}
