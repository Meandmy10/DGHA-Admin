import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ComplaintsService } from '../complaints/services/complaints.service';
import { Complaint } from '../complaints/models/compaint';

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

  Logout(){
    this.authService.logout();
  }
}
