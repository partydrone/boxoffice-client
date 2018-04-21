import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mergeMap';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  auth0 = new auth0.WebAuth({
    clientID: 'uvr3Tvp_T5XjFVMHY2cfVJpw8eG5cvKg',
    domain: 'boxoffice.auth0.com',
    responseType: 'token id_token',
    audience: 'https://boxoffice.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });
  refreshSubscription: any;
  userProfile: any;

  constructor(public router: Router) { }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public scheduleRenewal() {
    if (!this.isAuthenticated()) { return; }
    this.unscheduleRenewal();

    const expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));

    const expiresIn$ = Observable.of(expiresAt).mergeMap(expires => {
      const now = Date.now();
      return Observable.timer(Math.max(1, expires - now));
    });

    this.refreshSubscription = expiresIn$.subscribe(() => {
      this.renewToken();
      this.scheduleRenewal();
    });
  }

  public unscheduleRenewal() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  public renewToken() {
    this.auth0.checkSession({}, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        this.setSession(result);
      }
    });
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.unscheduleRenewal();
    this.router.navigate(['/']);
  }

  public getProfile(callback): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      callback(err, profile);
    });
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    this.scheduleRenewal();
  }

}
