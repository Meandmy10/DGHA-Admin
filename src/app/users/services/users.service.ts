import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Config } from 'src/app/config';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { User } from '../models/user';
import { timeout, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {
  private readonly uri = Config.GetResource();

  constructor(private authService: AuthService, private http: HttpClient) {
    super();
   }
   
   private GetHeaders(){
    return {
      headers: new HttpHeaders({
        'Authorization': this.authService.authorizationHeader,
        'Content-Type': 'application/json'
      })
    };
  }

  public GetUserbyEmail(email: string) {
    return this.http.get<User>(this.uri + `/Accounts/email/${email}`, this.GetHeaders())
      .pipe(
        timeout(5000),
        retry(3),
        catchError(this.HandleError)
      );
  }

  public AddRole(userId: string, role: string) {
    return this.http.post(this.uri + `/Accounts/${userId}/${role}`, this.GetHeaders())
      .pipe(
        timeout(5000),
        retry(3),
        catchError(this.HandleError)
      );
  }

  public RemoveRole(userId: string, role: string) {
    return this.http.delete(this.uri + `/Accounts/${userId}/${role}`, this.GetHeaders())
      .pipe(
        timeout(5000),
        retry(3),
        catchError(this.HandleError)
      );
  }


}
