import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';

import { ContestRoutingModule } from './contest-routing.module';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestListItemComponent } from './contest-list/contest-list-item.component';
import { ContestDetailComponent } from './contest-detail/contest-detail.component';
import { ContestResolver } from './contest-resolver.service';
import { ContestService } from './contest.service';
import { ContestEditComponent } from './contest-edit/contest-edit.component';
import { ContestNewComponent } from './contest-new/contest-new.component';
import { ContestFormComponent } from './contest-form/contest-form.component';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    ContestRoutingModule
  ],
  declarations: [
    ContestListComponent,
    ContestListItemComponent,
    ContestDetailComponent,
    ContestEditComponent,
    ContestNewComponent,
    ContestFormComponent
  ],
  providers: [
    ContestResolver,
    ContestService
  ]
})
export class ContestModule { }
