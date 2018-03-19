import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Contest } from './contest';

@Injectable()
export class ContestResolver implements Resolve<Contest> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contest> {
    throw new Error('Method not implemented.');
  }

}
