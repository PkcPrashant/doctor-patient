import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  loginProfile: Subject<string> = new Subject();

  PasswordMatcher(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors['passwordMatcher']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ passwordMatcher: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
  
}
