import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestsComponent } from '@app/contests/contests.component';

const routes: Routes = [
  { path: '', component: ContestsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestsRoutingModule { }
