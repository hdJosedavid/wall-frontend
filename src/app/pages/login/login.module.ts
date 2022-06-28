import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { SocialComponent } from 'src/app/shared/social/social.component';

const routes: Routes =[{
  path: '',
  component: LoginComponent,
  data: { title: 'Login'}
}]
@NgModule({
  declarations: [
    LoginComponent,
    SocialComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
