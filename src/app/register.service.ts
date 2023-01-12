import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  _Url1='http://localhost:3000/api/register';


  constructor(private http:HttpClient) { }
  registerUser(data:any){
    console.log("service for register is working fine ")
    return this.http.post(this._Url1,data)

  }
}
