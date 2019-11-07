import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallBackComponent } from './call-back/call-back.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailBreakPipe } from './services/email-break.pipe';
import { NotImpimentedYetComponent } from './not-impimented-yet/not-impimented-yet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CallBackComponent,
    HomeComponent,
    EmailBreakPipe,
    NotImpimentedYetComponent,
    PageNotFoundComponent,
    ComplaintsComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
