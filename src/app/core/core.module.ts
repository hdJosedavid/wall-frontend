import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharingService} from '@app/services/sharing.service';
import {CookieService} from "ngx-cookie-service";
import {LocalStorageService} from "@app/services/local-storage.service";
import {RestService} from "@app/services/rest.service";
import {AuthService} from "@app/services/auth.service";
import {PaletteService} from "@app/services/palette.service";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        LocalStorageService,
        CookieService,
        AuthService,
        RestService,
        SharingService,
        PaletteService
    ]
})
export class CoreModule {
}
