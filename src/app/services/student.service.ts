import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class StudentService {
constructor( private http: HttpClient,private router: Router) { }

saveData(student:any) {
    this.http.post<any>("http://localhost:3000/api/doctorsetnotavailabledate/1",JSON.stringify(student)).subscribe(_res=>{
      
    console.log(JSON.stringify(student));
      this.router.navigate(["doctorsDashboard"]);

    });
  }

  updateData(studentedit:any) {
    this.http.post<any>("http://localhost:3000/api/doctorsetnotavailabledateEdit/1",JSON.stringify(studentedit)).subscribe(_res=>{
      console.log(JSON.stringify(studentedit));
      this.router.navigate(["doctorprofile"]);
      alert("Data Updated");

    });
  }
}