import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestRoutingModule } from './contest-routing.module';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestDetailComponent } from './contest-detail/contest-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ContestRoutingModule
  ],
  declarations: [
    ContestListComponent,
    ContestDetailComponent
  ]
})
export class ContestModule { }
