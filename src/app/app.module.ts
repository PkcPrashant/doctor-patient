import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { DoctorsDashboardComponent } from './doctorsPortal/doctors-dashboard/doctors-dashboard.component';
import { PatientsPastVisitsComponent } from './patients-past-visits/patients-past-visits.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component'
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';

import { PopUpComponent } from './pop-up/pop-up.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalenderSlotsComponent } from './calender-slots/calender-slots.component';
import { ScheduleModule, RecurrenceEditorModule ,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService, TimelineMonthService} from '@syncfusion/ej2-angular-schedule';
import { ValidationComponent } from './validation/validation.component';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule } from '@syncfusion/ej2-angular-buttons';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputComponent } from './tag-input/tag-input.component';
import { DoctorsAvailableTimeslotsComponent } from './doctors-available-timeslots/doctors-available-timeslots.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    HeaderComponent,
    DoctorsDashboardComponent,
    PatientsPastVisitsComponent,
    CreateAppointmentComponent,
    CalendarComponent,
    DoctorprofileComponent,
    BookingHistoryComponent,
    DashboardComponent,
    PopUpComponent,
    CalenderSlotsComponent,
    ValidationComponent,
    TagInputComponent,
    DoctorsAvailableTimeslotsComponent,
    ConfirmationPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScheduleModule,
    RecurrenceEditorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ButtonModule,
    ScheduleModule, RecurrenceEditorModule, ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule, BrowserAnimationsModule
  ],
  providers: [LoginComponent,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService, TimelineMonthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
