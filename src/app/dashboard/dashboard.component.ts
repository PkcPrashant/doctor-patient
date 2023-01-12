import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public searchForm!:FormGroup;
  public requestForm!:FormGroup;
  posts:any;
  specialization:any;
  
  constructor( private service:PostService,private Formbuilder :FormBuilder,private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe((response: any) => {
      this.posts = response;
    });

    this.service.getspecialization()
    .subscribe((response: any) => {
      this.specialization = response;
    });

    this.searchForm =this.Formbuilder.group({
      location:[''],
      specialization:['']
      
    });
    this.requestForm =this.Formbuilder.group({
      requestdate:[''],
      docid:['101']
      
    });
    console.log(this.requestForm );
  }

  search()
  {
    this.http.get<any>("http://localhost:3000/api/doctors?location=Hyd&specialization=ortho").subscribe(_res=>{
      this.posts=_res;
    });
  }
  requestappointment(){

    this.http.post<any>("http://localhost:3000/api/requestappointment/1",this.requestForm.value).subscribe(_res=>{
      alert("Appointment request Submitted");
      // this.signupForm.reset()
      this.router.navigate(["booking-history"])
    });

  }
  openDialog(){
    // this.dialogRef.open(PopUpComponent,{
    //   data : {
    //     name : 'Samuel'
    //   }
    // });
  }

}
