import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contest } from '../contest';

@Component({
  selector: 'bo-contest-detail',
  templateUrl: './contest-detail.component.html',
  styleUrls: ['./contest-detail.component.scss']
})
export class ContestDetailComponent implements OnInit {
  contest: Contest;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.contest = this.route.snapshot.data['contest'];
  }

}
