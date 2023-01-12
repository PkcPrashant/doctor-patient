import { Component, OnInit } from '@angular/core';
import { RequestedAppointmentsService } from 'src/app/requested-appointments.service';
import { Router, NavigationExtras } from '@angular/router';
import { UseConfirmedAppointmentsService } from 'src/app/use-confirmed-appointments.service';
import { DeleteAppointmentService } from 'src/app/delete-appointment.service';

@Component({
  selector: 'app-doctors-dashboard',
  templateUrl: './doctors-dashboard.component.html',
  styleUrls: ['./doctors-dashboard.component.css']
})
export class DoctorsDashboardComponent implements OnInit {

  displayConfirmed: boolean = true;
  displayRequested: boolean = true;
  posts: any = []
  confirmedAppntmsList: any = this.useConfirmedAppmntsSrvc.abc?.filter((data: any) => data.status === 'Confirmed')
  displayDeleteModal: boolean=false;

  constructor(private reqAppService: RequestedAppointmentsService, private router: Router, private useConfirmedAppmntsSrvc: UseConfirmedAppointmentsService, private deleteService: DeleteAppointmentService) { }

  ngOnInit(): void {
    console.log('Confirmed Appointment List ', this.confirmedAppntmsList);
    this.reqAppService.showRequestedAppointments().subscribe((res: any) => {
      this.posts = res
      console.log("Requested Appointment List ", this.posts.RequestedAppointmentsList)
    })
  }

  displyConfirmedAppointment(e: any): void {
    this.displayConfirmed = e.target.checked;
  }

  displyRequestedAppointment(e: any): void {
    this.displayRequested = e.target.checked;
  }

  onClickAccept(patientName: string, listItemIndex: number, date: string,time:string): void {
    console.log(patientName)
    const navigationExtras: NavigationExtras = { state: { patientsName: patientName, listsItemIndex: listItemIndex, dateFromDashboard: date,timeFromDashboard:time} }
    this.router.navigate(['doctorsDashboard/availableTimeSlots'], navigationExtras)
  }

  deleteSingleAppointment(appointmentsArray: any, listItemIndex: number, email: string): void {
    // this.displayDeleteModal=true
    // this.deleteFromModal(appointmentsArray,listItemIndex,email)
    if(confirm('Are You Sure You Want To Delete Appointment'))
    appointmentsArray.splice(listItemIndex,1)
  //   this.posts.requestedAppointmentsList.emit(item)
  //   this.posts.requestedAppointmentsList.forEach((value: any,index: any)=>{
  //     if(value==item) this.posts.requestedAppointmentsList.splice(index,1);
  // });
    this.confirmedAppntmsList.splice(listItemIndex, 1);
    this.deleteService.onClickDelete(email).subscribe(res => {
      console.log(res);
      this.posts.requestedAppointmentsList = this.posts.requestedAppointmentsList.filter((item: any) => { item.email !== email })
    })
  }
 
  // deleteFromModal(appointmentsArray: any, listItemIndex: number, email: string): void{
  //   appointmentsArray.splice(listItemIndex, 1);
  //   this.deleteService.onClickDelete(email).subscribe(res => {
  //     console.log(res);
  //     this.posts.requestedAppointmentsList = this.posts.requestedAppointmentsList.filter((item: any) => { item.email !== email })
  //   })
  // }

  closeModal(){
    this.displayDeleteModal=false

  }

}


