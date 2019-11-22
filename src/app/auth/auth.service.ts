import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';
import { Router } from '@angular/router';

import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Observable navItem source
  private _authStatus = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authStatus$ = this._authStatus.asObservable();
  
  private Manager = new UserManager(this.getClientSettings());
  private User: User | null;

  constructor(private router: Router) {
    this.Manager.getUser().then(user => {
      this.User = user;
      this._authStatus.next(this.isAuthenticated());
    });
  }

  login() {
    return this.Manager.signinRedirect();
  }

  async completeAuthentication() {
    this.User = await this.Manager.signinRedirectCallback();
    this._authStatus.next(this.isAuthenticated());
    this.router.navigate(['/home']);
  }

  isAuthenticated(): boolean {
    const authed: boolean = this.User != null && !this.User.expired;
    return authed;
  }

  get authorizationHeader(): string {
    return `${this.User.token_type} ${this.User.access_token}`;
  }

  isAdmin(): boolean {
    return this.User.profile.role == "Administrator";
  }

  get email(){
    return this.User.profile.email;
  }

  logout() {
    this.Manager.signoutRedirect();
  }

  private getClientSettings(): UserManagerSettings {
    if(isDevMode()){
      return {
        authority: 'http://localhost:5000',
        client_id: 'AdminPortal',
        client_secret: "secret",
        redirect_uri: "http://localhost:4200/callback",
        response_type: "code",
        scope:"openid api role email",
        post_logout_redirect_uri : "http://localhost:4200/home"
        
      };
    }
    else{
      return {
        authority: 'https://dgha-identityserver.azurewebsites.net',
        client_id: 'AdminPortal',
        client_secret: "secret",
        redirect_uri: "https://dgha-admin.azurewebsites.net/callback",
        response_type: "code",
        scope:"openid api role email",
        post_logout_redirect_uri : "https://dgha-admin.azurewebsites.net/home"
      };
    }
  }
}
