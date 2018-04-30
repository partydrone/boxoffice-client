import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContestService } from '../contest.service';
import { Contest } from '../contest';

@Component({
  selector: 'bo-contest-new',
  templateUrl: './contest-new.component.html',
  styleUrls: ['./contest-new.component.scss']
})
export class ContestNewComponent implements OnInit {
  contest: Contest;

  constructor(private contestService: ContestService, private router: Router) { }

  ngOnInit() {
    this.contest = {id: '', title: '', startedOn: '', endedOn: ''};
  }

  createContest(contest: Contest) {
    this.contestService.createContest(contest).subscribe(
      ()      => this.router.navigate(['/contests']),
      (error) => console.log(error)
    );
  }

  cancelEdit(): void {
    this.router.navigate(['/contests']);
  }

}
