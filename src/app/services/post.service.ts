import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:3000/api/doctors';
  
  private bookingurl = "http://localhost:3000/api/mybooking";

  private docprofile = "http://localhost:3000/api/doctorprofile/1";
  private docnotavailableDate = "http://localhost:3000/api/doctornotavailabledates";

  private specialization = 'http://localhost:3000/api/specialization';


   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }
  getMybooking(){
    return this.httpClient.get(this.bookingurl);
  }

  getMyprofile(){
    return this.httpClient.get(this.docprofile);
  }
  getnotAvailabledates(){
    return this.httpClient.get(this.docnotavailableDate);
  }

  getspecialization(){
    return this.httpClient.get(this.specialization);
  }
}