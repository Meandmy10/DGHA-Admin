import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CallBackComponent } from './call-back/call-back.component';


const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'callback',  component: CallBackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
