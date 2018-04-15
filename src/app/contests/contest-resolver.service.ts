import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

import * as Query from './contest-queries';
import { Contest } from './contest';

interface ContestQueryResponse {
  getContest: Contest;
}

@Injectable()
export class ContestResolver implements Resolve<Contest> {

  constructor(private apollo: Apollo) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contest> {
    const contestId = route.params['id'];

    return null;
  }

}
