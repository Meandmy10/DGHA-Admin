import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../../config';
import { ApiService } from '../../shared/services/api.service';
import { Complaint } from '../models/compaint';
import { catchError, retry, timeout } from 'rxjs/operators';
import { BasicComplaint } from '../models/basic-complaint';
import { ComplaintLocations } from '../models/complaint-locations';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService extends ApiService {
  private readonly uri = Config.GetResource();

  constructor(private authService: AuthService, private http: HttpClient) {
    super();
  }

  private GetHeaders(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.authorizationHeader
      })
    };
  }

  public GetComplaints() {
    return this.http.get<ComplaintLocations>(this.uri + '/Complaints', this.GetHeaders())
      .pipe(
        timeout(5000),
        retry(3),
        catchError(this.HandleError)
      );
  }

  public GetResolvedComplaints() {
    return this.http.get<Complaint[]>(this.uri + '/Complaints/Resolved', this.GetHeaders())
      .pipe(
        timeout(5000),
        retry(3),
        catchError(this.HandleError)
      );
  }

  public GetComplaint(placeId: string, userId: string, timeSubmitted: string) {

    const reqparams = `/Complaints/${placeId}/${userId}/${timeSubmitted}`;

    return this.http.get<Complaint>(this.uri + reqparams, this.GetHeaders())
      .pipe(
        timeout(5000),
        retry(3),
        catchError(this.HandleError)
      );
  }

  public PostComplaint(complaint: BasicComplaint) {
    return this.http.post<Complaint>(this.uri + '/Complaints', complaint ,this.GetHeaders())
      .pipe(
        timeout(5000),
        retry(3),
        catchError(this.HandleError)
      );
  }

  public PutComplaint(placeId: string, userId: string, timeSubmitted: string, complaint: BasicComplaint) {

    const reqparams = `/Complaints/${placeId}/${userId}/${timeSubmitted}`;

    return this.http.put<Complaint>(this.uri + reqparams, complaint, this.GetHeaders())
      .pipe(
        timeout(5000),
        retry(3),
        catchError(this.HandleError)
      );
  }

  public DeleteComplaint(placeId: string, userId: string, timeSubmitted: string) {

    const reqparams = `/Complaints/${placeId}/${userId}/${timeSubmitted}`;

    return this.http.delete<Complaint>(this.uri + reqparams, this.GetHeaders())
      .pipe(
        timeout(5000),
        retry(3),
        catchError(this.HandleError)
      );
  }
}
