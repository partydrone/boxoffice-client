import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ContestService } from './contest.service';
import { Contest } from './contest';

@Injectable()
export class ContestResolver implements Resolve<Contest> {

  constructor(private contestService: ContestService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contest> {
    return this.contestService.getContest(route.params['id']);
  }

}
