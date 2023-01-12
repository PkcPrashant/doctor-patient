import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsUserExistsService {
  isUserExistsURL='http://localhost:3000/api/createAppointment/isUserDetailsExists'

  constructor(private http:HttpClient) { }

  isUserDetailsExists(){
    return this.http.get(this.isUserExistsURL)
  }
}
