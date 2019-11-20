import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public email: string;
  public user: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.usersService.GetUserbyEmail(this.email).subscribe(user => {
      console.log(user);
      this.user = user;
    })
    console.log("lol");
  }
}
