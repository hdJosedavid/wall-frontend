import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@app/shared/shared.module';
import {CoreModule} from '@app/core/core.module';
import {HomeComponent} from './home.component';
import {WelcomeComponent} from '../welcome/welcome.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {title: 'Home'},
}, {
  path: 'welcome',
  component: WelcomeComponent,
  data: {title: 'Welcome'},
}];

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})

export class HomeModule {
}
