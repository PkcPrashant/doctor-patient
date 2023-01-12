import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDatepickerInputEvent } from '@angular/material/datepicker'
import { stringify } from 'querystring';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {

  docprofile: any;
  docnotavailableDate: any;
  status: string;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });



  comparisonStart: any;
  comparisonEnd: any;
  constructor(private service: PostService, private http: HttpClient, private formBuilder: FormBuilder, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {

    this.service.getMyprofile().subscribe((response: any) => {
      this.docprofile = response;
      this.range = new FormGroup({
        start: new FormControl(new Date(2023, 1, 25)),
        end: new FormControl(new Date(2023, 1, 30)),
      });
    });

    this.service.getnotAvailabledates().subscribe((response: any) => {
      this.docnotavailableDate = response;
    });
  }
  dateSelected: any;
  selecteddate: Date;
  notAvailableForm = this.formBuilder.group({
    sessionRange: this.formBuilder.group({
      startDate: '',
      endDate: ''
    })
  });
  notAvailableFormEdit = this.formBuilder.group({
    range: this.formBuilder.group({
      start: '',
      end: ''
    })
  });

  fetchDateSelected() {
    console.log(this.dateSelected);
  }

  onFormSubmit() {
    this.studentService.saveData(this.notAvailableForm.value);
    this.notAvailableForm.reset();
  }
  onFormUpdate() {
    console.log(this.range.value);
    this.studentService.updateData(this.range.value);
  }


  dateFilterFn = (date: Date) => ![0, 6].includes(date.getDay());

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  unavailavledays(calenderDate: Date): boolean {
    return calenderDate > new Date();

  }
  ShowConfirm() {
    if (confirm("Are you sure to delete")) {
      this.http.delete('http://localhost:3000/api/doctornotavailabledateDelete/1')
        .subscribe(() => this.status = 'Delete successful');

    }

  }
}

