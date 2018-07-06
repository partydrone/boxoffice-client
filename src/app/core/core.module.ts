import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '@app/core/module-import-guard';
import { GraphQLModule } from '@app/graphql/graphql.module';
import { MaterialModule } from '@app/material/material.module';

import { NavComponent } from '@app/core/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    GraphQLModule,
    MaterialModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    GraphQLModule,
    MaterialModule,
    NavComponent
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
