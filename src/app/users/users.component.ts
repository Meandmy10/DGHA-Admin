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
    this.user = null;
    this.error = "";
    this.usersService.GetUserbyEmail(this.email).pipe(
      catchError((error) => {
        this.loading = false;
        switch(error.status){
          case(404):
            this.error = "Can't find user, Check email and try again.";
            return throwError(error);
          default:
            this.error = "Unknown Error, Please try again.";
            return throwError(error);
        }
      })
    ).subscribe( (user: User) => {
      this.loading = false;
      this.user = user;
    })
  }
}
