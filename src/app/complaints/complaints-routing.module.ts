import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintsComponent } from './complaints.component';
import { AuthGuard } from '../auth/auth.guard';
import { ComplaintsResolverService } from './services/complaints-resolver.service';


const complaintsRoutes: Routes = [
  { 
    path: 'complaints',
    component: ComplaintsComponent,
    canActivate: [AuthGuard],
    resolve: {
      response: ComplaintsResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(complaintsRoutes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
