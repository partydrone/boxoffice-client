import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthModule } from '../auth/auth.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent],
  providers: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
