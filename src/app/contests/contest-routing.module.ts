import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestDetailComponent } from './contest-detail/contest-detail.component';
import { ContestResolver } from './contest-resolver.service';

const routes: Routes = [
  { path: 'contests', children: [
    { path: '', component: ContestListComponent },
    { path: ':id', component: ContestDetailComponent, resolve: { contest: ContestResolver } }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestRoutingModule { }
