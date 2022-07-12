import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestService} from '@app/services/rest.service';
import {environment} from '@environment/environment';
import {PaletteService} from "@app/services/palette.service";
import {Palette} from "@app/services/interfaces";

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ColorPaletteComponent {
  public color: string = 'default';
  public bulletinForm: FormGroup = this.formBuilder.group({
    body: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestService,
    public paletteService: PaletteService,
  ) {
  }

  public _setBulletin(): void {
    this.bulletinForm.value.accountId = 1;
    this.bulletinForm.value.content = '';
    this.bulletinForm.value.createdDate = '2022-07-11T13:31:40.881Z';
    this.restService.post(
      `${environment.apiBlog}/bulletins`,
      this.bulletinForm.value
    ).subscribe((res: any) => {
      console.log('success', res);
    });
  }

  public changeColor(variable: string) {
    this.color = variable;
    console.log(78787, variable);
    this.paletteService.setPaletteObservable = {color: variable};
  }

}
