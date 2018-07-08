import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { throwIfAlreadyLoaded } from '@app/core/module-import-guard';
import { GraphQLModule } from '@app/graphql/graphql.module';
import { MaterialModule } from '@app/material/material.module';

import { NavComponent } from '@app/core/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    GraphQLModule,
    MaterialModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    GraphQLModule,
    FontAwesomeModule,
    MaterialModule,
    NavComponent
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
