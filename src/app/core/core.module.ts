import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharingService } from '@app/services/sharing.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [SharingService]
})
export class CoreModule { }
