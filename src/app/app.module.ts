import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BusinessComponent } from './layouts/business/business.component';
import { SystemComponent } from './layouts/system/system.component';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './shared/icons/icons.component';
import { CommentaryComponent } from './shared/commentary/commentary.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    BusinessComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
