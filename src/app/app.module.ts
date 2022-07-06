import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {BusinessComponent} from './layouts/business/business.component';
import {SystemComponent} from './layouts/system/system.component';
import {RestService} from "@app/services/rest.service";

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    BusinessComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    CookieService,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
