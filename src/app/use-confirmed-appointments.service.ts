import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseConfirmedAppointmentsService {

  abc: any;
  messageSource=new Subject();
  currentMessage=this.messageSource.asObservable();

  constructor() {
    console.log(this.currentMessage)
   }

  updateConfirmedList(message:any){
    this.abc = message;
    console.log(message)
    this.messageSource.next(message)
  }
}
