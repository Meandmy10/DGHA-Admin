import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.css']
})
export class CallBackComponent implements OnInit {
  
  error: boolean;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var errors = this.route.snapshot.queryParams['error'];

    // is errors exist
    if (errors) {
      this.error = true;
      console.error(errors);
    }
    else{
      this.authService.completeAuthentication();
    }
  }

}
