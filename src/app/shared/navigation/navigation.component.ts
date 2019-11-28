import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() pageName: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  Logout() {
    this.authService.logout();
  }
}
