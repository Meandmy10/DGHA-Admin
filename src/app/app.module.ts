import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotImpimentedYetComponent } from './not-impimented-yet/not-impimented-yet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComplaintsModule } from './complaints/complaints.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    NotImpimentedYetComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComplaintsModule,
    HomeModule,
    UsersModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
