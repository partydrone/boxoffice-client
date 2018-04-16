import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as Query from '../contest-queries';
import { Contest } from '../contest';

@Component({
  selector:    'bo-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls:   ['./contest-list.component.scss']
})
export class ContestListComponent implements OnInit {
  loading: boolean;
  contests: Contest[];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
    .watchQuery<Contest[]>({ query: Query.listContests })
    .valueChanges
    .subscribe(({data, loading}) => {
      this.loading = loading;
      this.contests = data['listContests']['items'];
    });
  }

}
