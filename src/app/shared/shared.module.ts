import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { EmailBreakPipe } from './pipes/email-break.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    EmailBreakPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    EmailBreakPipe,
  ]
})
export class SharedModule { }
