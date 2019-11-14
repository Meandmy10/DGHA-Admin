import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './complaints.component';
import { SharedModule } from '../shared/shared.module';
import { ComplaintComponent } from './complaint/complaint.component';
import { PlaceComponent } from './place/place.component';


@NgModule({
  declarations: [
    ComplaintsComponent,
    ComplaintComponent,
    PlaceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComplaintsRoutingModule,
    FormsModule
  ]
})
export class ComplaintsModule { }
