import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestedAppointmentsService {
  doctorsDashboardUrl="http://localhost:3000/api/doctorsDashboard"

  constructor(private http:HttpClient) { }

  showRequestedAppointments() {
    return this.http.get(this.doctorsDashboardUrl)
  }
  updateRequestedAppointments(data:any){
    return this.http.post(this.doctorsDashboardUrl,data)
  }
}
