import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'bo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}