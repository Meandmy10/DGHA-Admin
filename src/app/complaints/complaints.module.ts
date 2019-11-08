import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './complaints.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ComplaintsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComplaintsRoutingModule
  ]
})
export class ComplaintsModule { }
