import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {

  constructor() { }

  protected HandleError(error: any){
    var applicationError = error.headers.get('Application-Error');

    // either application-error in header or model error in body
    if (applicationError) {
      return throwError(applicationError);
    }

    if(error.status < 400 || error.status == null) {
      console.error("Unknown Error: ", error.error);
      return throwError(error);
    }

    switch(error.status){
      case(400):
        console.error("400 Bad Request: ", error.error);
        return throwError(error);
      case(401):
        console.error("401 Unauthorized: ", error.error);
        return throwError(error);
      case(403):
        console.error("403 Forbidden: ", error.error);
        return throwError(error);
      case(404):
        console.error("404 Not Found: ", error.error);
        return throwError(error);
      case(409):
        console.error("409 Conflict: ", error.error);
        return throwError(error);
      default:
        console.error(error.status + " Server Error: ", error.error);
        return throwError(error);
    }
  }
}
