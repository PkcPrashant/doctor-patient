import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsHistoryService {

  savePatientConsultancyURL = 'http://localhost:3000/api/patientHistory';
  medicineListURL = 'http://localhost:3000/api/medicineList';

  constructor(private http: HttpClient) { }

  savePatientsConsultancyDetails(data: any) {
    return this.http.post(this.savePatientConsultancyURL, data);
  }

  getPatientHistory(): Observable<Object[]> {
    return this.http.get<Object[]>(this.savePatientConsultancyURL);
  }

  getMedicineList() :Observable<string[]> {
    return this.http.get<string[]>(this.medicineListURL);
  }

}
