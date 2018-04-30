import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthModule } from '../auth/auth.module';
import { GraphQLModule } from '../graphql/graphql.module';
import { MaterialModule } from '../core/material.module';

import { LoggerService } from './logger.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    GraphQLModule,
    MaterialModule
  ],
  exports: [
    AuthModule,
    GraphQLModule,
    MaterialModule,
    NavComponent
  ],
  declarations: [
    NavComponent
  ],
  providers: [
    LoggerService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
