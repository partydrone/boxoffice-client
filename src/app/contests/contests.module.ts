import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContestsRoutingModule } from '@app/contests/contests-routing.module';
import { ContestsComponent } from '@app/contests/contests.component';

@NgModule({
  imports: [
    CommonModule,
    ContestsRoutingModule
  ],
  declarations: [ContestsComponent]
})
export class ContestsModule { }
