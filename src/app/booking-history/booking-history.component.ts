import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { MatDialog } from  '@angular/material/dialog';


@Component({
  selector: 'booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  // selecteddate: Date;
  myprofile:any;
  constructor(private service:PostService,private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.service.getMybooking().subscribe((response: any) => {
      this.myprofile = response;
    });
    console.log(this.myprofile);

  }

  

}
