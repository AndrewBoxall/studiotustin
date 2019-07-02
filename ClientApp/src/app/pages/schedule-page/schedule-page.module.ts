import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { SchedulePageComponent } from './schedule-page.component';
import { AppointmentComponent } from '../../components/schedule/appointment.component';
import { BookApptComponent } from '../../components/schedule/book-appt.component';


@NgModule({
  declarations: [
    SchedulePageComponent,
    AppointmentComponent,
    BookApptComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SchedulePageComponent
  ],
  providers: [],
  bootstrap: [SchedulePageComponent]
})
export class SchedulePageModule { }
