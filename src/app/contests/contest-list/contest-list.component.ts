import { Component, OnInit } from '@angular/core';
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

  constructor(private contestService: ContestService) { }

  ngOnInit() {
    this.contests = this.getContests();
  }

  getContests(): Observable<Contest[]> {
    return this.contestService.getContests();
  }

  deleteContest(id: string): Observable<Contest> {
    return this.contestService.deleteContest(id);
  }

}
