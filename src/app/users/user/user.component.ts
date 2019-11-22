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
  loading: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  public onPromote(){
    this.loading = true;
    this.error = "";
    this.usersService.AddRole(this.user.id, "Administrator").pipe(
      catchError(error => {
        this.loading = false;
        console.log(error);
        this.error = "Error, Please Try Again Later.";
        return throwError(error);
      })
    ).subscribe(() => {
      this.loading = false;
      this.user.roles.push("Administrator");
      console.log("Added Admin Role");
    });
  }

  public onDemote(){
    this.loading = true;
    this.error = "";
    this.usersService.RemoveRole(this.user.id, "Administrator").pipe(
      catchError(error => {
        this.loading = false;
        console.log(error);
        this.error = "Error, Please Try Again Later.";
        return throwError(error);
      })
    ).subscribe(() => {
      this.loading = false;
      this.user.roles = [];
      console.log("Removed Admin Role");
    });
  }
}
