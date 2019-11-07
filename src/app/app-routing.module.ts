import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallBackComponent } from './call-back/call-back.component';
import { HomeComponent } from './home/home.component';
import { NotImpimentedYetComponent } from './not-impimented-yet/not-impimented-yet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComplaintsComponent } from './complaints/complaints.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'callback', component: CallBackComponent },
  { path: 'complaints', component: ComplaintsComponent },
  { path: 'reviews', component: NotImpimentedYetComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
