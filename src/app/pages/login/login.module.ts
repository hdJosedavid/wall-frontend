import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { SocialComponent } from '@shared/social/social.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  data: { title: 'Login' }
}]
@NgModule({
  declarations: [
    LoginComponent,
    SocialComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
