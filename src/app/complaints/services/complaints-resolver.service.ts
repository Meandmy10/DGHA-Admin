import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ComplaintsService } from './complaints.service';
import { ComplaintsLocation } from '../models/complaint-locations';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsResolverService implements Resolve<ComplaintsLocation[]> {

  constructor(private complaintsService: ComplaintsService, private router: Router) { } 
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ComplaintsLocation[]> | Observable<never> {
    return this.complaintsService.GetComplaints().pipe(
      map(complaints => {
        return complaints;
      }),
      catchError(error => {
        return EMPTY;
      })
    );
  }
}
