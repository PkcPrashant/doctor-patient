import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../helper.service';
import { IsUserExistsService } from '../is-user-exists.service';
import { patientDetails } from '../Modals/existingPatientDetails';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  userDetails:patientDetails
  isExists:boolean=false
  searchClicked: boolean;
  submitted: boolean;

  registrationForm=this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    gender: ['male'],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    Age: ['', Validators.required],
    patientAddress: ['', Validators.required],
    patientCity: ['', Validators.required],
    patientState: ['', Validators.required]
  },
  {
    validator: this.helperService.PasswordMatcher('password', 'confirmPassword')
  })

  createAppointmentForm=this.fb.group({
    searchValue:['',Validators.required]
  })

  constructor(private fb:FormBuilder , private userCheckService:IsUserExistsService, private helperService: HelperService) { }

  ngOnInit(): void {
  }

  isUserExists(val:any):void{
    this.searchClicked = true;
    console.log('VAL ', val)
    // this.userCheckService.isUserDetailsExists().subscribe((res: any)=>{
    //   if (false) {
    //     this.userDetails=res
    //     console.log(this.userDetails,"Rechecking USer Details")
    //     this.isExists=true;
    //   }
    // })
  }

  bookAppointment(status: string) {
    if (status === 'new') {
      this.submitted = true;
    }
  }

  
  get registrationFormControls() {
    return this.registrationForm.controls;
  }
  // get patientControls() {
  //   return (this.registrationFormControls['patientDetails'] as FormGroup)['controls'];
  // }

}
