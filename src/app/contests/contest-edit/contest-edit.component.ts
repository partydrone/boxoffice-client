import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContestService } from '../contest.service';
import { Contest } from '../contest';

@Component({
  selector: 'bo-contest-edit',
  templateUrl: './contest-edit.component.html',
  styleUrls: ['./contest-edit.component.scss']
})
export class ContestEditComponent implements OnInit {
  contest:      Contest;
  errorMessage: any;

  constructor(private route: ActivatedRoute, private router: Router, private contestService: ContestService) { }

  ngOnInit() {
    this.contest = this.route.snapshot.data.contest;
  }

  updateContest(contest: Contest): void {
    this.contestService.updateContest(contest).subscribe(
      ()           => this.router.navigate(['/contests']),
      (error: any) => this.errorMessage = <any>error
    );
  }

}
