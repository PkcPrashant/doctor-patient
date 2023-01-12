import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvailableTimeSlotsService {
  _URL="http://localhost:3000/api/getAvailableTimeSlots"

  constructor(private http:HttpClient) { }

  displayAvailableTimeSlots(){
    return this.http.get(this._URL)
  }
}
