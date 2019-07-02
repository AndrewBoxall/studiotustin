import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { PatientPageComponent } from './patient-page.component';
import { PatientCardComponent } from '../../components/patients/patient-card.component';


@NgModule({
  declarations: [
    PatientPageComponent,
    PatientCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PatientPageComponent
  ],
  providers: [],
  bootstrap: [PatientPageComponent]
})
export class PatientPageModule { }
