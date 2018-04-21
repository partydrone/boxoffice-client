import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'bo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Box Office';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
    auth.scheduleRenewal();
  }
}
