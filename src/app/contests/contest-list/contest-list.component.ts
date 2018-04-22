import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ContestService } from '../contest.service';
import { Contest } from '../contest';

@Component({
  selector:    'bo-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls:   ['./contest-list.component.scss']
})
export class ContestListComponent implements OnInit {
  loading: boolean;
  contests: Observable<Contest[]>;

  constructor(private contestService: ContestService, private router: Router) { }

  ngOnInit() {
    this.contests = this.getContests();
  }

  getContests(): Observable<Contest[]> {
    return this.contestService.getContests();
  }

  deleteContest(id: string) {
    console.log(`Deleting contest ${id}.`);
    this.contestService.deleteContest(id)
    .subscribe(() => this.router.navigate(['/contests']),
    (error) => console.log(error));
  }

}
