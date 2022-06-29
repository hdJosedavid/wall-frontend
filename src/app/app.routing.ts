import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './layouts/business/business.component';
import { SystemComponent } from './layouts/system/system.component';
import { CredentialGuard } from './shared/guards/credential.guard';

const routes: Routes = [{
  path: '', redirectTo: 'login', pathMatch: 'full'
}, {
  path: '',
  component: BusinessComponent,
  canActivate: [CredentialGuard],
  children: [
    {
      path: 'home',
      loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule),
    }
  ]
}, {
  path: '',
  component: SystemComponent,
  canDeactivate: [],
  children: [
    {
      path: 'login',
      loadChildren: () => import("./pages/login/login.module").then((m) => m.LoginModule),
      data: { title: 'Login' }
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
