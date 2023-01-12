import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderSlotsComponent } from './calender-slots/calender-slots.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsDashboardComponent } from './doctorsPortal/doctors-dashboard/doctors-dashboard.component';
import { LoginComponent } from './login/login.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { PatientsPastVisitsComponent } from './patients-past-visits/patients-past-visits.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { DoctorsAvailableTimeslotsComponent } from './doctors-available-timeslots/doctors-available-timeslots.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'doctorsDashboard',component:DoctorsDashboardComponent},
  {path:'PatientsPastVisits/:patientname',component:PatientsPastVisitsComponent},
  {path:'createAppointment',component:CreateAppointmentComponent},
  {path:'booking-history',component:BookingHistoryComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'doctorprofile',component:DoctorprofileComponent},
  {path:'doctorsDashboard/availableTimeSlots',component:DoctorsAvailableTimeslotsComponent},
  {path:'doctorsDashboard/calenderSlots',component:CalenderSlotsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
