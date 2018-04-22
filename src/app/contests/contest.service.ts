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

  createContest(contest): Observable<Contest> {
    return this.apollo.mutate<Contest>({
      mutation: Query.createContest,
      variables: {
        title: contest.title,
        startedOn: contest.startedOn,
        endedOn: contest.endedOn
      }
    })
    .map(({data}) => {
      return data['createContest'];
    }, (error) => {
      console.log('Error creating contest:', error);
    });
  }

  updateContest(contest): Observable<Contest> {
    console.log('ContestService.updateContest() called…', contest);
    return this.apollo.mutate<Contest>({
      mutation: Query.updateContest,
      variables: {
        id: contest.id,
        title: contest.title,
        startedOn: contest.startedOn,
        endedOn: contest.endedOn
      }
    })
    .map(({data}) => {
      return data['updateContest'];
    }, (error) => {
      console.log('Error updating contest:', error);
    });
  }

  deleteContest(id: string): Observable<Contest> {
    return this.apollo.mutate<Contest>({
      mutation: Query.deleteContest,
      variables: {
        id: id
      }
    })
    .map(({data}) => {
      return data['deleteContest'];
    }, (error) => {
      console.log('Error deleting contest:', error);
    });
  }

}
