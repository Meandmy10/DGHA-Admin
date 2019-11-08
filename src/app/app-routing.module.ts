import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotImpimentedYetComponent } from './not-impimented-yet/not-impimented-yet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'reviews', component: NotImpimentedYetComponent },
  { path: 'users', component: NotImpimentedYetComponent },
  { path: 'error', component: NotImpimentedYetComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
