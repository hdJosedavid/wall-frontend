import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {BusinessComponent} from './layouts/business/business.component';
import {SystemComponent} from './layouts/system/system.component';
import {CoreModule} from "@app/core/core.module";

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
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
