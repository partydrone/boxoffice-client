import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [CallbackComponent],
  providers: [AuthService]
})
export class AuthModule { }
