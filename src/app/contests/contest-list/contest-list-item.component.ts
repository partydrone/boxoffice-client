import { Component, OnInit, Input } from '@angular/core';

import { Contest } from '../contest';

@Component({
  selector: 'bo-contest-list-item',
  templateUrl: './contest-list-item.component.html',
  styleUrls: ['./contest-list-item.component.scss']
})
export class ContestListItemComponent implements OnInit {
  @Input() contest: Contest;

  constructor() { }

  ngOnInit() {
  }

}
