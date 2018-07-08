import { Component, OnInit } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  faComment = faComment;

  constructor() { }

  ngOnInit() {
  }

}
