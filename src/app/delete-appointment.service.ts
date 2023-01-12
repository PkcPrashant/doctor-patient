import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteAppointmentService {
  url="http://localhost:3000/api/doctorsDashboard"

  constructor(private http:HttpClient) { }

  onClickDelete(email:string){
    return this.http.delete(this.url+'/'+email)

  }
}
