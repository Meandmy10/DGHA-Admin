import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ComplaintsService } from '../services/complaints.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public Loading: boolean;

  constructor(public authService: AuthService, private complaintsService: ComplaintsService) { }

  ngOnInit() {
  }

  login(){
    this.Loading = true;
    this.authService.login();
  }

  request(){
    this.complaintsService.GetComplaints().subscribe(complaints => {
      console.log(complaints);
    })
  }

  Logout(){
    this.authService.logout();
  }

}
