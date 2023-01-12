import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HelperService } from '../helper.service';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  registrationForm = this.fb.group({
    userRole: ['doctor'],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    gender: ['male'],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    patientDetails: this.fb.group({
      Age: ['', Validators.required],
      patientAddress: ['', Validators.required],
      patientCity: ['', Validators.required],
      patientState: ['', Validators.required]
    }),
    doctorDetails: this.fb.group({
      clinicName: ['', Validators.required],
      clinicLocation: ['', Validators.required],
      clinicCity: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      licenceNumber: ['', Validators.required],
      consultationFee: ['', Validators.required],
      alternateMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      specialization: ['', Validators.required],
      qualification: ['', Validators.required],
      experience: ['', Validators.required]
    })
  }, {
    validator: this.helperService.PasswordMatcher('password', 'confirmPassword')
  })

  selectedRole: string = "";
  submitted: boolean = false;

  roles = [
    { Id: '1', name: "Doctor" },
    { Id: '2', name: "Patient" },
  ]

  chooseRole(e: any) {
    this.selectedRole = e.target.value
    console.log("", this.selectedRole)

  }

  getSelectedValue() {
    console.log(this.selectedRole);
  }

  constructor(private fb: FormBuilder, private regService: RegisterService, private helperService: HelperService) { }

  ngOnInit() {
  }

  get registrationFormControls() {
    return this.registrationForm.controls;
  }

  get doctorControls() {
    return (this.registrationFormControls['doctorDetails'] as FormGroup)['controls'];
  }

  get patientControls() {
    return (this.registrationFormControls['patientDetails'] as FormGroup)['controls'];
  }

  getUserRegister(val: any): void {
    this.submitted = true;
    if (this.registrationForm.valid) {
      this.regService.registerUser(val).subscribe(
        (result: any) => console.warn("Signup Response :", result)
      )
    }
  }

}

