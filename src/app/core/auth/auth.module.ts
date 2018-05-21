import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [AuthRoutingModule],
  declarations: [CallbackComponent, ProfileComponent],
  providers: [AuthService]
})
export class AuthModule { }
