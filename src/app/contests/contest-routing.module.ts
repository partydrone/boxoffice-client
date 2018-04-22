import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestNewComponent } from './contest-new/contest-new.component';
import { ContestDetailComponent } from './contest-detail/contest-detail.component';
import { ContestEditComponent } from './contest-edit/contest-edit.component';
import { ContestResolver } from './contest-resolver.service';

const routes: Routes = [
  { path: '', component: ContestListComponent },
  { path: 'new', component: ContestNewComponent },
  { path: ':id', component: ContestDetailComponent, resolve: { contest: ContestResolver } },
  { path: ':id/edit', component: ContestEditComponent, resolve: { contest: ContestResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestRoutingModule { }
