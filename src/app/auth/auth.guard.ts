import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { take, map, skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    var skipNo: number;
    //if page is first navigation initial value needs to be ignored
    if(this.router.navigated){
      skipNo = 0
    }
    else{
      skipNo = 1
    }
    return this.authService.authStatus$.pipe(
      skip(skipNo),
      take(1),
      map(status => {
      if(status) {
        if(this.authService.isAdmin()) {
          return (true);
        }
        else {
          this.router.navigate(['./home']);
          return (false);
        }
      }
      else {
          this.router.navigate(['./home']);
          return (false);
      }
    }));
  }
}
