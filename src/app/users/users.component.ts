import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public email: string;
  public user: User;
  public error: string = "";
  loading: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loading = true;
    //focus on loading element
    const focusElement = document.querySelector('#loading') as HTMLElement
    if (focusElement) {
      focusElement.tabIndex = -1;
      focusElement.focus();
    }

    this.user = null;
    this.error = "";
    this.usersService.GetUserbyEmail(this.email).pipe(
      catchError((error) => {
        this.loading = false;
        switch(error.status){
          case(404):
            this.error = "Can't find user, Check email and try again.";
            break;
          default:
            this.error = "Unknown Error, Please try again.";
            break;
        }
        
        // focus on error message
        const focusElement = document.querySelector('#error') as HTMLElement
        if (focusElement) {
          focusElement.tabIndex = -1;
          focusElement.focus();
        }

        return throwError(error);
      })
    ).subscribe( (user: User) => {
      this.loading = false;
      this.user = user;
      
      //focus on loaded user title
      const focusElement = document.querySelector('#userTitle') as HTMLElement
      if (focusElement) {
        focusElement.tabIndex = -1;
        focusElement.focus();
      }
    })
  }
}
