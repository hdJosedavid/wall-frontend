import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestService} from '@app/services/rest.service';
import {environment} from '@environment/environment';
import {PaletteService} from "@app/services/palette.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ColorPaletteComponent implements OnDestroy {
  subs$: Subscription;
  public color: string = 'default';
  public bulletinForm: FormGroup = this.formBuilder.group({
    body: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestService,
    public paletteService: PaletteService,
  ) {
    this.subs$ = new Subscription();
  }

  public _setBulletin(): void {
    this.bulletinForm.value.accountId = 1;
    this.bulletinForm.value.content = '';
    this.bulletinForm.value.createdDate = new Date();
    console.log(2342342);
    this.subs$ = this.restService.post(
      `${environment.apiBlog}/bulletins`,
      this.bulletinForm.value
    ).subscribe((res: any) => {
      console.log('success', res);
    });
  }

  public changeColor(variable: string) {
    this.color = variable;
    this.paletteService.setPaletteObservable = {color: variable};
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }
}
