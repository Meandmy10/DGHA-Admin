import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { take, mergeMap, catchError, tap, map, timeout } from 'rxjs/operators';

import { ComplaintsService } from './complaints.service';
import { Complaint } from '../models/compaint';
import { ComplaintLocation } from '../models/complaint-location';
import { BasicComplaint } from '../models/basic-complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsResolverService implements Resolve<Record<string,Record<string, BasicComplaint[]>>> {

  constructor(private complaintsService: ComplaintsService, private router: Router) { } 
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Record<string,Record<string, BasicComplaint[]>>> | Observable<never> {
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
