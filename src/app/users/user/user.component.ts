import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  error: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  public onPromote(){
    this.error = "";
    this.usersService.AddRole(this.user.id, "Administrator").pipe(
      catchError(error => {
        console.log(error);
        this.error = "Error, Please Try Again Later.";
        return throwError(error);
      })
    ).subscribe(() => {
      this.user.roles = ["Adminstrator"];
      console.log("Added Admin Role");
    });
  }

  public onDemote(){
    this.error = "";
    this.usersService.RemoveRole(this.user.id, "Administrator").pipe(
      catchError(error => {
        console.log(error);
        this.error = "Error, Please Try Again Later.";
        return throwError(error);
      })
    ).subscribe(() => {
      this.user.roles = [];
      console.log("Removed Admin Role");
    });
  }
}
