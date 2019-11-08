import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
      break;
      default:
        return throwError(error);
      break;
      
    }
    
    // var modelStateErrors: string = '';

    // // for now just concatenate the error descriptions, alternative we could simply pass the entire error response upstream
    // for (var key in error.error) {
    //   if (error.error[key]) modelStateErrors += error.error[key].description + '\n'; 
    // }
      
    // modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    // return throwError(modelStateErrors || 'Server error');
  }
}
