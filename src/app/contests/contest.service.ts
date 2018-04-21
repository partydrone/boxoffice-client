import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as Query from './contest-queries';
import { Contest } from './contest';

@Injectable()
export class ContestService {

  constructor(private apollo: Apollo) { }

  getContests(): Observable<Contest[]> {
    return this.apollo
    .watchQuery<Contest[]>({ query: Query.listContests })
    .valueChanges
    .map(({data}) => {
      return data['listContests']['items'];
    });
  }

  getContest(id: string): Observable<Contest> {
    return this.apollo.query<Contest>({
      query: Query.getContest,
      variables: {
        id: id
      }
    })
    .map(({data}) => {
      return data['getContest'];
    });
  }

  // createContest

  // updateContest

  deleteContest(id: string): Observable<Contest> {
    return this.apollo.mutate<Contest>({
      mutation: Query.deleteContest,
      variables: {
        id: id
      }
    })
    .map(({data}) => {
      return data['deleteContest'];
    });
  }

}
