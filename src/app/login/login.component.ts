import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false;
  loginForm: FormGroup;
  submitted = false;
  constructor(private logService: LoginService, private router: Router, private helperService: HelperService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userEmail': new FormControl("", [Validators.required, Validators.email]),
      'userPwd': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'userRole': new FormControl('doctor')
    })
    console.log(this.loginForm)
  }

  get loginFormControls() {
    // debugger
    return this.loginForm!.controls;
  }

  getUserLogin(val: any): void {
    this.submitted = true;
    console.log(val)
    if (this.loginForm.valid) {
      this.isLoggedIn = true;
      this.logService.saveUser(val).subscribe({
        next: (result) => {
          this.helperService.loginProfile.next(val.userRole);
          val.userRole === 'doctor' ? this.router.navigate(['doctorsDashboard']) : this.router.navigate(['dashboard']);
          console.warn("Login Response : ", result)
        },
        error: (error) => {
        }

      });

    }
  }

}
