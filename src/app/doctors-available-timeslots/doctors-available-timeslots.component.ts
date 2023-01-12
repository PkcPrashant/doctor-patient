import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableTimeSlotsService } from '../available-time-slots.service';
import { RequestedAppointmentsService } from '../requested-appointments.service';
import { UseConfirmedAppointmentsService } from '../use-confirmed-appointments.service';
import { Subscription } from 'rxjs';

// import { Output,EventEmitter } from '@angular/compiler/src/core';

@Component({
  selector: 'app-doctors-available-timeslots',
  templateUrl: './doctors-available-timeslots.component.html',
  styleUrls: ['./doctors-available-timeslots.component.css']
})
export class DoctorsAvailableTimeslotsComponent implements OnInit {
  availableDayslots:any=[];
  selectedDate:any;
  choose_time:string=''
  requestedPatientName:string='';
  listsItemIndex:number
  requestedAppointmentsList:Object[]=[]
  tempArray:any=[];
  newConfirmedList:any
  dateFromDashboard:string
  updatedRequestAppointmentObject:{
    "RequestedDate": string,
    "RequestedTime":string,
    "Name": string,
    "status":string
  }
  testing:any = {};

  
  defaultDailyTimings=[
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM"
  ]

  subscription: Subscription;
  
  constructor(private useConfirmedAppmntsSrvc:UseConfirmedAppointmentsService, private availabletimeslots:AvailableTimeSlotsService, private reqAppService:RequestedAppointmentsService , private router:Router) { 
    console.log(this.choose_time)
    const navigation=this.router.getCurrentNavigation();
    const state=navigation?.extras.state as {patientsName:string,listsItemIndex:number,dateFromDashboard:string,timeFromDashboard:string}
    console.log("HYderabad",state)
    this.requestedPatientName=state?.patientsName  
     this.listsItemIndex=state.listsItemIndex
     this.dateFromDashboard=state.dateFromDashboard
     this.selectedDate=state.dateFromDashboard
     this.choose_time=state.timeFromDashboard
   
  }
  onChangeTime(e:any){
    console.log(e.target.value)
  }
  onChangeDate(e:any){
    // this.availabletimeslots.displayAvailableTimeSlots().subscribe((res)=>{
    //   this.availableDayslots=res
    //   console.log(this.availableDayslots.newArray)

    // })

    this.selectedDate = e.target.value;
    this.testing =  this.availableDayslots.newArray.find((date: any) => date.date === this.selectedDate);
    
  }
  ngOnInit(): void {this.requestedPatientName
    this.availabletimeslots.displayAvailableTimeSlots().subscribe((res)=>{
      this.availableDayslots=res
      console.log('NEW ARRAY ', this.availableDayslots.newArray)
      // this.onFinalConfirmation();
      this.testing =  this.availableDayslots.newArray.find((date: any) => date.date === this.selectedDate);

    })
    // this.subscription = this.useConfirmedAppmntsSrvc.currentMessage.subscribe(res => console.log(res))
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  
  onFinalConfirmation(){  
    console.log(this.selectedDate)
    this.availableDayslots.newArray.map((eachDay:any)=>{
      if(eachDay.date===this.selectedDate){
        eachDay.slots.map((eachSlot:any)=>{
          if(eachSlot.doctorTime===this.choose_time){
            // eachSlot.ConfirmedAppointments.push(this.requestedPatientName)
            if(!Array.isArray(eachSlot.ConfirmedAppointments)) {
              eachSlot.ConfirmedAppointments = []
              }
            eachSlot.ConfirmedAppointments.push(`meet with ${this.requestedPatientName}`)
          }else{
            console.log("falseeee")
          }
        })
      }
    })
    //name ,date,time ,status
    this.updatedRequestAppointmentObject={
      "RequestedDate": this.selectedDate,
      "RequestedTime":this.choose_time,
      "Name": this.requestedPatientName,
      "status":"Confirmed"
    }
    this.tempArray.push(this.updatedRequestAppointmentObject)
    console.log(this.tempArray)

    this.reqAppService.showRequestedAppointments().subscribe((res:any)=>{
      this.requestedAppointmentsList=res.RequestedAppointmentsList
      // console.log(this.requestedAppointmentsList.findIndex((each: any)=>each.Name))
       let commonIndex=this.requestedAppointmentsList.findIndex((eachObj:any)=>eachObj.Name===this.updatedRequestAppointmentObject.Name)
        this.requestedAppointmentsList[commonIndex] = {
          ...this.requestedAppointmentsList[commonIndex] as Object,
          ...this.updatedRequestAppointmentObject
        }
        console.log(this.requestedAppointmentsList)
        this.newConfirmedList=this.requestedAppointmentsList
        this.newMessage(this.newConfirmedList)
        
    })
    // this.reqAppService.updateRequestedAppointments().subscribe((updatedData:any)=>{
    //   console.log(updatedData)

    // })

  }

  newMessage(updatedList:any) {
    console.log(updatedList)
    this.useConfirmedAppmntsSrvc.updateConfirmedList(updatedList)
  }
}
