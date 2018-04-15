import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ContestRoutingModule } from './contest-routing.module';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestListItemComponent } from './contest-list/contest-list-item.component';
import { ContestDetailComponent } from './contest-detail/contest-detail.component';
import { ContestResolver } from './contest-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    ContestRoutingModule
  ],
  declarations: [
    ContestListComponent,
    ContestListItemComponent,
    ContestDetailComponent
  ],
  providers: [
    ContestResolver
  ]
})
export class ContestModule { }
